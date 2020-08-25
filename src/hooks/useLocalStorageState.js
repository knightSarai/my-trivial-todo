import {useState, useEffect} from 'react';

export default (key, defaultValue) => {
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
        } catch (err) {
            val = defaultValue;
        }
        return val;
    });

    useEffect((key)=>{
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
}