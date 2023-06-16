import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
}

export const deviceVitalData = createAsyncThunk(
    "deviceVitals/patients",
    async (arg, { rejectWithValue }) => {

        try {

            const { data } = await axios.get(`${BASE_URL}/device-vitals/?sensepatientid=${arg.id}&context=${arg.context}`, {
                ...arg,
            }, {
                withCredentials: true,
            })
        
            return data;

        } catch (error) {
            console.log(error);
            // let Errmessage = error.response.data.Message;
            let Err = error.response.data;
            return rejectWithValue(Err)
        }
    });







//device data slice
export const deviceVitalsSlice = createSlice({
    name: "deviceVitals",
    initialState,
    reducers: {
        // Reducer comes here
        reset: (state) => {
        return initialState;
        }
    },
    
    extraReducers: {

        [deviceVitalData.pending]: (state) => {
            state.loading = true;
        },
        [deviceVitalData.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [deviceVitalData.rejected]: (state, action) => {
            state.data = action.payload;
            //state.message = action.payload.message;
            state.loading = false;
            state.isSuccess = false;
        },

        reset:(state) => {
            return initialState;
        }

    },
})

export const { reset } = deviceVitalsSlice.actions;
export default deviceVitalsSlice.reducer;
