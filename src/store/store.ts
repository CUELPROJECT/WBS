import { configureStore } from "@reduxjs/toolkit";
import validationReducer from "@/store/slices/validationSlice"; // Import your reducers

export const store = configureStore({
  reducer: {
    validationReducer
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
