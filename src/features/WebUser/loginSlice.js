import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const userLoginData = createAsyncThunk(
  "userLogin/login",
  async (arg, { rejectWithValue }) => {
    try {

      if (arg.token) {

        const { data } = await axios.post(`${BASE_URL}/user/login`, {},
          { headers: { 'authorization': `Bearer ${arg.token}` } })

        //console.log(data);
        //localStorage.setItem("loginDetails", JSON.stringify(data));
        return data;

      } else {

        const {data}  = await axios.post(`${BASE_URL}/user/login`, {
          ...arg,
        }, {
          withCredentials: true,
        })
        //console.log(data);
        // localStorage.setItem("log", JSON.stringify(data));
        return data;
      }


    } catch (error) {
     // console.log(error);
      // let Errmessage = error.response.data.Message;
      let Err = error.response.data;
      return rejectWithValue(Err)
    }
  });







//user login slice
export const loginSlice = createSlice({
  name: "userLogin",
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

    [userLoginData.pending]: (state) => {
      state.loading = true;
    },
    [userLoginData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [userLoginData.rejected]: (state, action) => {
      state.data = action.payload;
      //state.message = action.payload.message;
      state.loading = false;
      state.isSuccess = false;
    },

  },
})

