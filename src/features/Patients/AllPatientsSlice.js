import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'



export const allPatientsData = createAsyncThunk(
    "allPatients/patients",
    async (arg, { rejectWithValue }) => {
       
        try {

            //   if (arg.token) {

            //     const { data } = await axios.get("http://localhost:4004/api/v1/web/patients/get-all-patients", {},
            //       { headers: { 'authorization': `Bearer ${arg.token}` } })
            //     return data;

            //   } else {
          
            //     const data  = await axios.get("http://localhost:4004/api/v1/web/patients/all-patients", {
            //       ...arg,
            //     }, {
            //       withCredentials: true,
            //     })
            //     console.log(data);
            //     return data;
            //   }

            const {data} = await axios.get("http://localhost:4004/api/v1/web/patients/all-patients", {
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







//all patients slice
export const allPatientsSlice = createSlice({
    name: "allPatients",
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

        [allPatientsData.pending]: (state) => {
            state.loading = true;
        },
        [allPatientsData.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [allPatientsData.rejected]: (state, action) => {
            state.data = action.payload;
            //state.message = action.payload.message;
            state.loading = false;
            state.isSuccess = false;
        },

    },
})

