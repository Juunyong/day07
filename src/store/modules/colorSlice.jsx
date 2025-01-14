import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    color: 'skyblue',
};
export const colorSlice = createSlice({
    name: 'colorSlice',
    initialState,
    reducers: {
        onBlue: (state, action) => {
            state.color = 'blue';
        },
        onGreen: (state, action) => {
            state.color = 'green';
        },
        onRed: (state, action) => {
            state.color = 'red';
        },
        onPink: (state, action) => {
            state.color = 'pink';
        },
    },
});
export const { onBlue, onGreen, onRed, onPink } = colorSlice.actions;
export default colorSlice.reducer;
