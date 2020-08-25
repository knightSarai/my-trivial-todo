import React from 'react'
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

export default function TodoForm({addTodo}) {
    const [value, handleChange, reset] = useInputState("");
    const onSubmit = e => {
        e.preventDefault();
        addTodo(value);
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
