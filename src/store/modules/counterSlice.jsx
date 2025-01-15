import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0, //count로 변경
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1;
            //state.키 => initialState에 초기변수 연결하기
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        decrement: (state, action) => {
            state.count -= 1;
        },

        onReset: (state, action) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, onReset } = counterSlice.actions;

export default counterSlice.reducer;
