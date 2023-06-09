import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'



export const allEnterpriseData = createAsyncThunk(
    "allEnterprises/enterprises",
    async (arg, { rejectWithValue }) => {
       
        try {
            
            const {data} = await axios.get("http://localhost:4004/api/v1/web/enterprises", {
                ...arg,
            }, {
                withCredentials: true,
            })
            // console.log(data);
            return data;


        } catch (error) {
            // console.log(error);
            // let Errmessage = error.response.data.Message;
            let Err = error.response.data;
            return rejectWithValue(Err)
        }
    });







//all enterprises slice
export const allEnterprisesSlice = createSlice({
    name: "allEnterprises",
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

        [allEnterpriseData.pending]: (state) => {
            state.loading = true;
        },
        [allEnterpriseData.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [allEnterpriseData.rejected]: (state, action) => {
            state.data = action.payload;
            //state.message = action.payload.message;
            state.loading = false;
            state.isSuccess = false;
        },

    },
})
