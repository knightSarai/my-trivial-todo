import {useState, useEffect} from 'react';

export default (key, defaultValue) => {
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
            
        } catch (err) {
            val = defaultValue;
        }
        console.log(val);
        return val;
    });

    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
}