import { createSlice } from "@reduxjs/toolkit";

const liveBroadcastSlice = createSlice({
    name: "liveBroadcast",
    initialState: {
        messages: []
    },
    reducers: {
        addMessages: (state, action) => {
            if (state.messages.length > 100) { state.messages.splice(500, 1) }
            state = state.messages.unshift(action.payload)
        }
    }
});

export const { addMessages } = liveBroadcastSlice.actions;
export default liveBroadcastSlice.reducer;