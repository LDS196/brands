import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BrandType} from "assets/brands";


export type SortType = {
    name: string,
    sortProp: string
}
type BrandDomainType = BrandType & { status: boolean }

export type InitialStateType = {
    brands: BrandDomainType[]
    filteredIdBrands: number[]
    currentPage: number
    sort: SortType
}

const initialState: InitialStateType = {
    brands: [],
    filteredIdBrands: [],
    currentPage: 1,
    sort: {
        name: 'price',
        sortProp: ''
    }
}
const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setBrands(state, {payload}: PayloadAction<BrandType[]>) {
            state.brands = payload.map(el => ({...el, status: false}))
        },
        changeStatusBrand(state, {payload}: PayloadAction<{ id?: number, status: boolean }>) {
            if(payload.id){
                const index = state.brands.findIndex(b => b.id === payload.id)
                if (index !== -1){
                    state.brands[index] = {...state.brands[index], status: payload.status}
                }
            } else {
                state.brands.map(el=> el.status=payload.status)
            }

        },
        setSort(state, {payload}: PayloadAction<SortType>) {
            state.sort = payload
        },
        setBrand(state, {payload}: PayloadAction<{ id: number, status: boolean }>) {
            if (payload.status) {
                state.filteredIdBrands.push(payload.id)
            } else {
                state.filteredIdBrands.filter(el => el !== payload.id)
            }
        },
        setCurrentPage(state, {payload}: PayloadAction<number>) {
            state.currentPage = payload
        },
        setFilters(state, action) {
            state.currentPage = Number(action.payload.currentPage)
            state.filteredIdBrands = (action.payload.brands)
            state.sort = action.payload.sort
        },
        clearFilteredBrands(state, action: PayloadAction) {
            state.filteredIdBrands = []
        }

    }
})
export const {changeStatusBrand,setSort, setBrand, setCurrentPage, setFilters, clearFilteredBrands, setBrands} = filterSlice.actions
export default filterSlice.reducer