import {configureStore, combineReducers} from "@reduxjs/toolkit"
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})
const store = configureStore({
    reducer: rootReducer
})

export default store
