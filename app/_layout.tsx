import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
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
      </Stack>
    </SafeAreaView>
  );
}
