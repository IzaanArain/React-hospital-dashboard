import { createSlice } from "@reduxjs/toolkit";

const initialState={
    requests:[
        {
            id:1,
            completed:false,
        },
        {
            id:2,
            completed:true,
        }
    ],
    isLoading:false,
    isError:false,
}

const RequestSlice=createSlice({
    name:"requests",
    initialState:initialState,
    reducers:{},
})

export default RequestSlice.reducer