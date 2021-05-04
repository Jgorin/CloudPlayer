import { createStore } from '@reduxjs/toolkit';
import ProfileSlice from "./reducers/ProfileSlice"

export const store = createStore(ProfileSlice)