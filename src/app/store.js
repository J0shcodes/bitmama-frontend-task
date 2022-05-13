import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import {loadState} from '../localStorage'

export default configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState: loadState()
})