import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector((state) => state.todosR.todos);
    return (
        <ul>
            todos.map()
            <TodoItem />
        </ul>
    );
};

export default TodoList;
