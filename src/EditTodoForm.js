import React, {useRef, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import useInputState from './hooks/useInputState';


const useStyle = makeStyles({
    EditTodoForm: {
        marginLeft: "1rem",
        width: "100%"
    }
})


export default function EditTodoForm({task, id, editTodo, toggle}) {
    const [value,  handleChange, reset] = useInputState(task);
    const ref = useRef();

    const classes = useStyle();

    useEffect(()=> {
        const onBodyClick = e => {
            if (ref.current.contains(e.target)) return;
            toggle();
        }

        document.body.addEventListener('click', onBodyClick);
        
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
        
    }, [toggle])    

    function handleSubmit(e) {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
    }

    return (
        <form onSubmit={handleSubmit} ref={ref} className={classes.EditTodoForm}>
            <TextField 
                margin="normal" 
                value={value} 
                onChange={handleChange} 
                fullWidth
                autoFocus
            />
        </form>
       
    )
}
