import { createSlice } from "@reduxjs/toolkit";

const initialState={
    holidays:[
        {
            id:1,
            rare:true,
        },
        {
            id:2,
            rare:false,
        },
        {
            id:3,
            rare:false,
        }
    ],
    isLoading:false,
    isError:false,
}

const HolidaySlice=createSlice({
    name:"holiday",
    initialState:initialState,
    reducers:{},
})

export default HolidaySlice.reducer