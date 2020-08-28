import React, {useContext} from 'react';
import {TodoContext} from './context/todos.context';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


import Todo from './Todo'

export default function TodoList() {
    const todos = useContext(TodoContext);
    const renderedTodo = todos.map((todo, idx) => (
        <React.Fragment key={todo.id}>
            <Todo
                {...todo}
            />
            {idx < todos.length - 1 && <Divider/>}
            </React.Fragment>
            )
        )

        if (todos.length) {
            return (
                <Paper>
                    <List>
                        {renderedTodo}
                    </List>
                </Paper>
            )
        };
        return null;

}
