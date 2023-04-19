import { createSlice } from "@reduxjs/toolkit";

export const sidebarVisibilitySlice = createSlice({
    name: "sidebarVisibility",
    initialState: {
        value: true
    },
    reducers: {
        toggleSidebar: (state) => {state.value = !state.value}
}});

export const {toggleSidebar} = sidebarVisibilitySlice.actions;
export default sidebarVisibilitySlice.reducer;