import React from 'react';
import useTodoState from './hooks/useTodoState';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const useStyles = makeStyles({
    Paper: {
      background: '#fafafa',
      height: "100vh",
      padding: 0,
      margin: 0,
    },
    AppBar: {
        height: "64px",
        padding: 0,
      margin: 0
    },
    Grid:{
        marginTop: "1.5rem"
    }
  });

export default function TodoApp() {
    const initialTodos = [];
    const {todos, addTodo, editTodo, changeTodoState, removeTodo} = useTodoState(initialTodos); 
    
    const classes = useStyles();
    return (
        <Paper className={classes.Paper} elevation={0}>
            <AppBar color="primary" position='static' className={classes.AppBar}>
                <Toolbar>
                    <Typography color='inherit' >TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid className={classes.Grid} container justify={"center"}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} changeTodoState={changeTodoState} editTodo={editTodo}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

// - TodoApp
//     - TodoForm
//     - TodoList
//         - TodoItem