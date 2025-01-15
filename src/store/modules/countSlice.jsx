import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    count: 0,
};
export const countSlice = createSlice({
    name: 'countSlice',
    initialState,
    reducers: {
        countIncrement: (state, action) => {
            if (!action.payload) {
                //action.payload -> 값을 받아오기
                state.count += 1;
            } else {
                state.count += action.payload;
            }
        },
        countDecrement: (state, action) => {
            if (!action.payload) {
                state.count -= 1;
            } else {
                state.count -= action.payload;
            }
            //action.payload -> 값을 받아오기
        },
    },
});
export const { countIncrement, countDecrement } = countSlice.actions;
export default countSlice.reducer;
