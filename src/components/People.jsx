import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { apiData } from '../features/apiData';
import { fetchUserList } from '../features/apiData';
import { useSelector } from "react-redux";
//the useSelector grabs values of our state everytime we need to use it
//used for accessing values of your states

function People() {
    const dispatch = useDispatch();


    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        //     .then((response) => response.json())
        //     .then((data) => dispatch(apiData(data)));
        // async function fetchUser() {
        //     // setIsFetching(true);
        //     try {
        //         await fetchUserList(1);
        //         // const expenses = await fetchExpenses();
        //         // setExpenses(expenses);
        //     } catch (error) {
        //         setError("Could not fetch expenses !");
        //     }
        //     // setIsFetching(false);
        // }
        // dispatch(fetchUser());
        dispatch(fetchUserList(1));
    });


    //the useSelector hook takes in a function which allows you to specify which state you're trying to talk about(which state you want to access)
    // const user = useSelector((state) => state.user.value);

    // const apiDatas = useSelector((state) => state.apidatas.value);
    const { data, errMessage } = useSelector((state) => state.apidatas);
    // console.log(apiDatas)
    const themeColor = useSelector((state) => state.themee.value);

    return (
        <div className="App" style={{ color: themeColor }}>
            <h1>People page</h1>

            {errMessage ? <h1>{errMessage}</h1> : data.length === 0 ? <h1>loading...</h1> : data.map((person) => {
                return (
                    <div key={person.id}>
                        <p>{person.title}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default People;