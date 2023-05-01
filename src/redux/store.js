import { configureStore } from "@reduxjs/toolkit";
import sidebarVisibilityReducer from "./sidebarVisiblilitySlice";
import cacheSearchReducer from "./cacheSearchSlice";
import liveBroadcastReducer from "./liveBroadcastSlice"

export const store = configureStore(
    {
        reducer: {
            sidebarVisibility: sidebarVisibilityReducer,
            cacheSearch: cacheSearchReducer,
            liveBroadcast: liveBroadcastReducer,
         },
    }
);