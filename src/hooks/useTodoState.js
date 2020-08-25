import useLocalStorageState from './useLocalStorageState';
import {v4 as uuid} from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map( todo => todo.id === todoId ? {...todo, task: newTask} : todo);
            setTodos(updatedTodos);
        },
        removeTodo: deletedTodoId => {
            const updatedTodos = todos.filter(todo => todo.id !== deletedTodoId);
            setTodos(updatedTodos);
        },
        changeTodoState: todoId => {
            const updatedTodos = todos.map( todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
            setTodos(updatedTodos);
        }
    };
}

