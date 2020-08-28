import React, {createContext, useReducer} from 'react';
import todoReducer from '../reducers/todo.reducer';

export const TodoContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
    const initialTodos = [];
    const [todos, dispatch]  = useReducer(todoReducer, initialTodos);

    return (
        <TodoContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodoContext.Provider>
    )
}

