import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
//the useSelector grabs values of our state everytime we need to use it
//used for accessing values of your states

import { useDispatch } from 'react-redux';
import { apiData } from '../features/apiData';

function Profile() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then((response) => response.json())
            .then((data) => dispatch(apiData(data)));
    })

    //the useSelector hook takes in a function which allows you to specify which state you're trying to talk about(which state you want to access)
    const user = useSelector((state) => state.users.value);
    const themeColor = useSelector((state) => state.themee.value);


    return (
        <div className="App" style={{ color: themeColor }}>
            <h1>Profile page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>



        </div>
    );
}

export default Profile;