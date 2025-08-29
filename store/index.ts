import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import habitsReducer from "./slices/habitsSlice";
import workoutsReducer from "./slices/workoutsSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
	reducer: {
		habits: habitsReducer,
		workouts: workoutsReducer,
		auth: authReducer,
	},
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export a typed useDispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
