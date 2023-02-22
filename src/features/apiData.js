import { createSlice } from '@reduxjs/toolkit'

let initialStateValue = [];

export const apiDataSlice = createSlice({
    name: "apidata",
    initialState: { value: initialStateValue },

    reducers: {

        apiData: (state, action) => {
            state.value = action.payload;
        },

    },
});

export const { apiData } = apiDataSlice.actions;

export default apiDataSlice.reducer;