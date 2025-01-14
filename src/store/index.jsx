import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './modules/colorSlice';

export const store = configureStore({
    reducer: {
        colorR: colorReducer,
    },
});
