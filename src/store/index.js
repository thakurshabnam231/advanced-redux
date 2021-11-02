import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uislice'
import cartReducer from './cartslice'
const store = configureStore({
    reducer: { ui: uiReducer,cart:cartReducer }
})
export default store;