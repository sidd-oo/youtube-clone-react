import { createSlice } from "@reduxjs/toolkit";

export const sidebarVisibilitySlice = createSlice({
    name: "sidebarVisibility",
    initialState: {
        value: true
    },
    reducers: {
        toggleSidebar: (state) => { state.value = !state.value },
        openSidebar: (state) => { state.value = true },
        closeSidebar: (state) => { state.value = false },
    }
});

export const { toggleSidebar, openSidebar, closeSidebar } = sidebarVisibilitySlice.actions;
export default sidebarVisibilitySlice.reducer;