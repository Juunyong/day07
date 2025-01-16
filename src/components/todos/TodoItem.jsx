import { useDispatch } from 'react-redux';
import { todosActions } from '../../store/modules/todoSlice';

const TodoItem = ({ todo }) => {
    const { id, text, isChk } = todo;
    const dispatch = useDispatch();
    return (
        <li style={{ color: '#000' }}>
            <input type="checkbox" checked={isChk} onChange={() => dispatch(todosActions.onModify(id))} />
            {id} 번 / {text}
            <button onClick={() => dispatch(todosActions.onDelete(id))}>삭제</button>
        </li>
    );
};

export default TodoItem;
