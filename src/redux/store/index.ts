import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/auth";
import { api } from "../api";
import likeReducer from "../slice/LikeSlice";
import currencyReducer from "../slice/CurrensySlice";
import cartReducer from "../slice/CartSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        like: likeReducer,
        cart: cartReducer,
        currency: currencyReducer,
        [api.reducerPath] : api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store