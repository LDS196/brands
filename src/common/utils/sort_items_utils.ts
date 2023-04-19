
import {InitialProductsStateType} from "components/Redux/Slices/ProdutsSlice";
import {SortType} from "components/Redux/Slices/FilterSlice";

export const sortProduct = (state:InitialProductsStateType, payload:SortType )=>{
    const order = payload.sortProp.includes('-') ? 'ask' : 'desc';
    const sortBy = payload.sortProp.replace('-', '');

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
    return state.filteredItems
}