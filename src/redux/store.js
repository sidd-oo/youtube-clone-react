import { configureStore } from "@reduxjs/toolkit";
import sidebarVisibilityReducer from "./sidebarVisiblilitySlice";

export const store = configureStore(
    {
        reducer: {
            sidebarVisibility: sidebarVisibilityReducer,
         },
    }
);