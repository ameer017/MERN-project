import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ApiSlice } from "./api/ApiSlice";


export default configureStore({
    reducer: {
        [ApiSlice.reducerPath] : ApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(ApiSlice.middleware), devTools: true
})