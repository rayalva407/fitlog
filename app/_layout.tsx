import { Stack, Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useEffect } from 'react';
import { initAuthListener } from '../services/auth';
import { useAppDispatch, useAppSelector } from '../store/hooks';

function LayoutContent() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading } = useAppSelector(state => state.auth);
  
  useEffect(() => {
    // Initialize auth state listener
    dispatch(initAuthListener());
  }, [dispatch]);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        {!isAuthenticated ? (
          // Redirect to auth if not authenticated
          <Stack.Screen 
            name="auth" 
            options={{ headerShown: false }} 
          />
        ) : (
          // Show app screens if authenticated
          <>
            <Stack.Screen 
              name="index" 
              options={{ title: 'FitLog - Dashboard' }} 
            />
            <Stack.Screen 
              name="habits/index" 
              options={{ title: 'My Habits' }} 
            />
            <Stack.Screen 
              name="workouts/index" 
              options={{ title: 'My Workouts' }} 
            />
          </>
        )}
      </Stack>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <LayoutContent />
    </Provider>
  );
}
