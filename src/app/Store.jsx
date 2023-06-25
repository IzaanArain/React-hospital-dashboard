import { configureStore } from "@reduxjs/toolkit";
import RequestReducer from '../Features/Requests/RequestSlice'
import HolidayReducer from "../Features/Holidays/HolidaySlice";

export const store=configureStore({
    reducer:{
        request:RequestReducer,
        holiday:HolidayReducer,
    }
})