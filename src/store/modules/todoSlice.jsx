import { createSlice } from '@reduxjs/toolkit';
const todosdataList = [
    { id: 1, text: '박준용', isChk: false },
    { id: 2, text: 'b', isChk: true },
    { id: 3, text: 'c', isChk: false },
    { id: 4, text: 'd', isChk: false },
    { id: 5, text: 'e', isChk: false },
];
const initialState = {
    todos: todosdataList,
    text: '',
};

let num = initialState.text.length + 1;

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        onAdd: (state, action) => {
            //push 가능 => 원본이 변경된다 js Array 성격
            //push : toolkit 에서 관리한다 -> 불변성 유지 처리
            state.todos = state.todos.push({ id: num++, text: action.payload, isChk: false });
        },
        onDelete: (state, action) => {
            state.todos = state.todos.filter((todos) => todos.id !== action.payload);
        },
        onModify: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, isChk: !todo.isChk } : todo
            );
        },
        changeInput: (state, action) => {
            state.text = action.payload;
        },
    },
});
export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
