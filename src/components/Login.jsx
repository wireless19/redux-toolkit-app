import React from 'react';
import { useDispatch } from 'react-redux';
//the useDispatch hook is used to modify values of your states

import { login, logout } from '../features/user';

function Login() {
    const dispatch = useDispatch();
    return (
        <div className="App">
            <button onClick={() => { dispatch(login({ name: "Victor", age: 30, email: "victor@gmail.com" })) }}>Login</button>

            <button onClick={() => { dispatch(logout()) }}>Logout</button>
        </div>
    );
}

export default Login;
