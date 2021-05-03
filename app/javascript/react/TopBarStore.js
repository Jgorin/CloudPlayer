import { createStore } from '@reduxjs/toolkit';
import TopBarSlice from "./reducers/TopBarSlice"

export const topBarStore = createStore(TopBarSlice)