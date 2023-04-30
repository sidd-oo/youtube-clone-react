import { configureStore } from "@reduxjs/toolkit";
import sidebarVisibilityReducer from "./sidebarVisiblilitySlice";
import cacheSearchReducer from "./cacheSearchSlice";

export const store = configureStore(
    {
        reducer: {
            sidebarVisibility: sidebarVisibilityReducer,
            cacheSearch: cacheSearchReducer,
         },
    }
);