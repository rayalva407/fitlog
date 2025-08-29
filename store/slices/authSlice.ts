import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: null | {
    uid: string;
    email: string;
  };
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    // We'll add more reducers later
  },
});

export const { setUser, setAuthLoading } = authSlice.actions;
export default authSlice.reducer;
