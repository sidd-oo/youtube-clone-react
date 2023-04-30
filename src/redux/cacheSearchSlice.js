import { createSlice } from "@reduxjs/toolkit";

const cacheSearch = createSlice({
    name: "cacheSearch", 
    initialState: {},
    reducers: {
        cacheSearchResult: (state, action) => {
            state = Object.assign(state, action.payload);
        }
    }});


export const {cacheSearchResult} = cacheSearch.actions;
export default cacheSearch.reducer;