import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    userdetails: {
        name:"",
        username:"",
        email:"",
        password:""
    }
  };
const dribbbleSlice = createSlice({
  name: 'counter',
  initialState
  ,
  reducers: {
    createUser(state, action){
        state.userdetails = action.payload;
    }
  }
})

export const actions = dribbbleSlice.actions;

const store = configureStore({
  reducer: dribbbleSlice.reducer
})
export default store;