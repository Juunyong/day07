import { createSlice } from '@reduxjs/toolkit';
const todosData = [
    { id: 1, text: 'a', isChk: false },
    { id: 2, text: 'b', isChk: false },
    { id: 3, text: 'c', isChk: false },
    { id: 4, text: 'd', isChk: false },
    { id: 5, text: 'f', isChk: true },
];
const initialState = {
    todos: todosData,
    text: '',
};
export const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            //action.payload -> 값을 받아오기
        },
        onDelete: (state, action) => {
            //action.payload -> 값을 받아오기
        },
        onModify: (state, action) => {
            //action.payload -> 값을 받아오기
        },
    },
});
export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
