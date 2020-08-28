import React, {useContext} from 'react';
import {DispatchContext} from './context/todos.context';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import useInputState from './hooks/useInputState'

const useStyle = makeStyles({
    Paper: {
        margin: "1rem 0",
        padding: "0 1rem"
    }
})

export default function TodoForm() {
    const [value, handleChange, reset] = useInputState("");
    const dispatch = useContext(DispatchContext);
    const onSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD',
            payload: {
                task: value
            }
        })
        reset();
    }
    const classes = useStyle();
    return (
        <Paper className={classes.Paper}>
            <form onSubmit={onSubmit}>
                <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo"/>
            </form>
        </Paper>
    )
}
