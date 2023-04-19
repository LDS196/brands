import {configureStore} from '@reduxjs/toolkit'
import filter from "./Slices/FilterSlice";
import cart from "./Slices/CartSlice";
import products from 'components/Redux/Slices/ProdutsSlice'



export const store = configureStore({
    reducer: {
        filter: filter,
        cart: cart,
        products: products
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch