import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {products, ProductType} from "assets/products";
import {SortType} from "components/Redux/Slices/FilterSlice";


type InitialStateType = {
    items: ProductType[]
    filteredItems: ProductType[]
}
const initialState: InitialStateType = {
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
            const order = action.payload.sortProp.includes('-') ? 'ask' : 'desc';
            const sortBy = action.payload.sortProp.replace('-', '');

            if (order === 'desc' && sortBy === 'price') {
                state.filteredItems = state.filteredItems.sort((a, b) => b.regular_price.value - a.regular_price.value)
            }
            if (order === 'ask' && sortBy === 'price') {
                state.filteredItems = state.filteredItems.sort((a, b) => a.regular_price.value - b.regular_price.value)
            }
            if (order === 'desc' && sortBy === 'title') {
                state.filteredItems = state.filteredItems.sort((a, b) => {
                    return (-1) * (a.title.localeCompare(b.title))
                })
            }
            if (order === 'ask' && sortBy === 'title') {
                state.filteredItems = state.filteredItems.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })
            }

        },
        filterItems(state,
                    action: PayloadAction<number[]>
        ) {
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
