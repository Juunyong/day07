import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './modules/colorSlice';
import counterReducer from './modules/counterSlice';
import changeColorReducer from './modules/changeColorSlice';
import countReducer from './modules/countSlice';
import todosR from './modules/todoSlice';

export const store = configureStore({
    reducer: {
        colorR: colorReducer,
        counterR: counterReducer,
        colorChangeR: changeColorReducer,
        countR: countReducer,
        todosR,
    },
});
