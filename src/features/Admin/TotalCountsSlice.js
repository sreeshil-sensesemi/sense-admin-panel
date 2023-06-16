import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const totalCounts = createAsyncThunk(
    "totalCounts/admin",
    async (arg, { rejectWithValue }) => {
       
        try {
            
            const {data} = await axios.get(`${BASE_URL}/admin/total-counts`, {
                ...arg,
            }, {
                withCredentials: true,
            })
            
            return data;

        } catch (error) {
            // console.log(error);
            // let Errmessage = error.response.data.Message;
            let Err = error.response.data;
            return rejectWithValue(Err)
        }
    });







//all patients slice
export const totalCountsSlice = createSlice({
    name: "totalCounts",
    initialState: {
        data: [],
        loading: false,
        isSuccess: false,
        message: "",
    },
    reducers: {
        // Reducer comes here
    },
    extraReducers: {

        [totalCounts.pending]: (state) => {
            state.loading = true;
        },
        [totalCounts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [totalCounts.rejected]: (state, action) => {
            state.data = action.payload;
            //state.message = action.payload.message;
            state.loading = false;
            state.isSuccess = false;
        },

    },
})

