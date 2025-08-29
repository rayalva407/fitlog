import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
	id: string;
	name: string;
	completed: boolean;
	streak: number;
	createdAt: string;
}

interface HabitsState {
	items: Habit[];
	loading: boolean;
	error: string | null;
}

const initialState: HabitsState = {
	items: [],
	loading: false,
	error: null,
};

const habitsSlice = createSlice({
	name: "habits",
	initialState,
	reducers: {
		addHabit: (state, action: PayloadAction<Omit<Habit, "id">>) => {
			const newHabit: Habit = {
				...action.payload,
				id: Date.now().toString(),
			};
			state.items.push(newHabit);
		},
		toggleHabit: (state, action: PayloadAction<string>) => {
			const habit = state.items.find((item) => item.id === action.payload);
			if (habit) {
				habit.completed = !habit.completed;
				habit.streak = habit.completed
					? habit.streak + 1
					: Math.max(0, habit.streak - 1);
			}
		},
		setHabitsLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setHabitsError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
	},
});

export const { addHabit, toggleHabit, setHabitsLoading, setHabitsError } =
	habitsSlice.actions;
export default habitsSlice.reducer;
