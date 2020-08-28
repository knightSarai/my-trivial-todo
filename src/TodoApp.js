import React from 'react';
import {TodosProvider} from './context/todos.context';
import Paper from '@material-ui/core/Paper';
import {Typography, AppBar, Toolbar, Grid, makeStyles} from '@material-ui/core';


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
                    <TodosProvider>
                        <TodoForm/>
                        <TodoList/>
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}
