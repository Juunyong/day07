import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    color: 'pink',
};
export const changeColorSlice = createSlice({
    name: 'changeColor',
    initialState,
    reducers: {
        changeColor: (state, action) => {
            //action.payload -> 값을 받아오기
            state.color = action.payload;
        },
    },
});
export const { changeColor } = changeColorSlice.actions;
export default changeColorSlice.reducer;
