import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {products, ProductType} from "assets/products";
import {SortType} from "components/Redux/Slices/FilterSlice";
import {sortProduct} from "common/utils/sort_items_utils";


export type InitialProductsStateType = {
    items: ProductType[]
    filteredItems: ProductType[]
}
const initialState: InitialProductsStateType = {
    items: products,
    filteredItems: products
}

const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, {payload}: PayloadAction<ProductType[]>) {
            state.items = payload;
        },
        sortItems(state, action: PayloadAction<SortType>) {
            sortProduct(state,action.payload)
        },
        filterItems(state, action: PayloadAction<number[]>) {
            state.filteredItems = state.items.filter(el => {
                if (action.payload.length) {
                    return action.payload.includes(el.id)
                } else return true

            })
        }
    }
})


export const {setItems, sortItems, filterItems} = productsSlice.actions

export default productsSlice.reducer
