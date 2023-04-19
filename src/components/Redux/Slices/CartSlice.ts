import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "assets/products";

export type ProductForCartType = ProductType & {count:number}


 type InitialStateType = {
    statusOrder:boolean
    totalPrice: number
    items: ProductForCartType[]
}

const initialState: InitialStateType = {
    totalPrice: 0,
    items: [],
    statusOrder:false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload, count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.regular_price.value * obj.count) + sum
            }, 0)
        },
        minusItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload)
            if (findItem) {
                if (findItem.count > 0) findItem.count--
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.regular_price.value * obj.count) + sum
            }, 0)
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.regular_price.value * obj.count) + sum
            }, 0)
        },
        clearItem(state, action) {
            state.items = action.payload
            state.totalPrice = 0
        },
        setStatusOrder(state,action:PayloadAction<boolean>){
            state.statusOrder= action.payload
        }
    }
})
export const {addItem, removeItem, clearItem, minusItem,setStatusOrder} = cartSlice.actions
export default cartSlice.reducer
