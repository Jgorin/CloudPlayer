import { createStore } from '@reduxjs/toolkit';
import RootSlice from "./reducers/RootSlice"

export const store = createStore(RootSlice)