import { configureStore } from "@reduxjs/toolkit";
import { calcReducer } from "../reducers/clac.reducer";
export const store = configureStore({
    reducer: calcReducer
});