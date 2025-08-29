import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Workout {
  id: string;
  name: string;
  completedAt: string | null;
}

interface WorkoutsState {
  items: Workout[];
  loading: boolean;
  error: string | null;
}

const initialState: WorkoutsState = {
  items: [],
  loading: false,
  error: null,
};

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    addWorkout: (state, action: PayloadAction<Omit<Workout, 'id'>>) => {
      const newWorkout: Workout = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.items.push(newWorkout);
    },
    // We'll add more reducers later
  },
});

export const { addWorkout } = workoutsSlice.actions;
export default workoutsSlice.reducer;
