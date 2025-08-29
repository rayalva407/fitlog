import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "../store";

export default function RootLayout() {
	return (
		<Provider store={store}>
			<SafeAreaView style={{ flex: 1 }}>
				<Stack>
					<Stack.Screen
						name="index"
						options={{ title: "FitLog - Dashboard" }}
					/>
					<Stack.Screen name="habits/index" options={{ title: "My Habits" }} />
					<Stack.Screen
						name="workouts/index"
						options={{ title: "My Workouts" }}
					/>
				</Stack>
			</SafeAreaView>
		</Provider>
	);
}
