import {v4 as uuid} from 'uuid';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, {id: uuid(), task: action.payload.task, completed: false}];
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.payload.id);
        case 'EDIT':
            return state.map(todo => todo.id === action.payload.id ? {...todo, task: action.payload.task} : todo);
        case 'TOGGLE':
            return state.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }
}

export default reducer;