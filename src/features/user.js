import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
    // it contains oother information about the reducer, the actions we want to take on the state and the actual name of the state
    name: "user", //name of the slice or name of the state
    initialState: { value: initialStateValue },
    //OR
    //initialState: { value: { name: "", age: 0, email: "" } }, //"value" holds the values({ name: "", age: 0, email: "" }) inside our initial state
    reducers: {
        // pass down the different functions that you might want to use to alter the values of our application

        //every reducer function or action you want to take in redux takes in a function with two arguments: the first one is the value of the current state and the second one is called action.
        //state holds information about the current and previous value of your state
        //action is an object containing two things, one of them is called "payload" and the other one is called the "type"
        //the "payload is an object which you can pass in information that you might want to use when changing your state"
        login: (state, action) => {
            // do something with the state you change its value
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;