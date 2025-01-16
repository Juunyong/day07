import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosActions } from '../../store/modules/todoSlice';

const TodoInput = () => {
    // const [text, setText] = useState(); 내부에서 changeinput 처리할경우
    const { text } = useSelector((state) => state.todosR);
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(todosActions.onAdd(text));
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={(e) => dispatch(todosActions.changeInput(e.target.value))} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;
