import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential
} from 'firebase/auth';
import { auth } from './firebase';
import { setUser, clearAuth } from '../store/slices/authSlice';
import { AppDispatch } from '../store';

export const signUp = (email: string, password: string, displayName: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: displayName
        });
      }

      // Dispatch to Redux store
      dispatch(setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: displayName
      }));

      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };
};

export const logIn = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Dispatch to Redux store
      dispatch(setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName || ''
      }));

      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };
};

export const logOut = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await signOut(auth);
      dispatch(clearAuth());
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };
};

// Listen for authentication state changes
export const initAuthListener = () => {
  return (dispatch: AppDispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || ''
        }));
      } else {
        dispatch(clearAuth());
      }
    });
  };
};
