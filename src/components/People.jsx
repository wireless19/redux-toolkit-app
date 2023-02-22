import React from 'react';
import { useSelector } from "react-redux";
//the useSelector grabs values of our state everytime we need to use it
//used for accessing values of your states

function People() {


    //the useSelector hook takes in a function which allows you to specify which state you're trying to talk about(which state you want to access)
    // const user = useSelector((state) => state.user.value);
    // const themeColor = useSelector((state) => state.themee.value);
    const apiDatas = useSelector((state) => state.apidatas.value);

    const themeColor = useSelector((state) => state.themee.value);

    return (
        <div className="App" style={{ color: themeColor }}>
            <h1>People page</h1>

            {apiDatas.map((person) => {
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