import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


// let initialStateValue = [];

// export const apiDataSlice = createSlice({
//     name: "apidata",
//     initialState: { value: initialStateValue },

//     reducers: {

//         apiData: (state, action) => {
//             state.value = action.payload;
//         },

//     },
// });

// export const { apiData } = apiDataSlice.actions;

// export default apiDataSlice.reducer;

export const fetchUserList = createAsyncThunk(
    "getData",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?userId=${id}`
                // "https://jsonplaceholder.typicode.com/posts?userId=1"
            );
            // console.log(data);
            return data;

        } catch (error) {
            // console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

const apiDataSlice = createSlice({
    name: "apidata",
    initialState: {
        data: [],
        loading: false,
        isSuccess: false,
        errMessage: "",
    },
    reducers: {},
    extraReducers: {
        [fetchUserList.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchUserList.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [fetchUserList.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
            state.errMessage = action.payload;
        },
    },
});

export default apiDataSlice.reducer;