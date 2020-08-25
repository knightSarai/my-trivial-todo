import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import EditTodoForm from './EditTodoForm'
import { makeStyles } from '@material-ui/core/styles';

import useToggle from './hooks/useToggle'

const useStyle = makeStyles({
    lineThrow: {
        textDecoration: "line-through"
    },
    ListItem: {
        height: "64px"
    }
})

export default function Todo({
    task,
    completed,
    removeTodo, 
    id, 
    changeTodoState, 
    editTodo}) 
    {
    const [editMode, toggle] = useToggle(false);
    const classes = useStyle();
    
    if (editMode) {
        return (
            <ListItem className={classes.ListItem}>
                <EditTodoForm task={task} id={id} editTodo={editTodo} toggle={toggle}/>
            </ListItem>
        )
    }
    return (
        <ListItem className={classes.ListItem}>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => changeTodoState(id)}/>
            <div className={completed ? classes.lineThrow : ""}>{task}</div>
            <ListItemSecondaryAction>
                <IconButton onClick={()=>{removeTodo(id)}}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={()=> toggle()}>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>           
        </ListItem>
    )
}
