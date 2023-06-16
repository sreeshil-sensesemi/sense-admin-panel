import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const allDoctorsData = createAsyncThunk(
    "allDoctors/doctors",
    async (arg, { rejectWithValue }) => {

        try {

            const { data } = await axios.get(`${BASE_URL}/doctors/all-doctors`, {
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
export const allDoctorsSlice = createSlice({
    name: "allDoctors",
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

        [allDoctorsData.pending]: (state) => {
            state.loading = true;
        },
        [allDoctorsData.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [allDoctorsData.rejected]: (state, action) => {
            state.data = action.payload;
            //state.message = action.payload.message;
            state.loading = false;
            state.isSuccess = false;
        },

    },
})

