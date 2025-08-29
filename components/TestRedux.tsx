import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addHabit, toggleHabit } from "../store/slices/habitsSlice";
import { addWorkout } from "../store/slices/workoutsSlice";
import { setUser } from "../store/slices/authSlice";

const TestRedux = () => {
	const habits = useAppSelector((state) => state.habits?.items || []);
	const workouts = useAppSelector((state) => state.workouts?.items || []);
	const auth = useAppSelector((state) => state.auth || {});

	const dispatch = useAppDispatch();

	React.useEffect(() => {
		console.log("Current Redux state:", {
			habits: habits.length,
			workouts: workouts.length,
			auth: auth,
		});
	}, [habits, workouts, auth]);

	const handleAddHabit = () => {
		dispatch(
			addHabit({
				name: `Habit ${habits.length + 1}`,
				completed: false,
				streak: 0,
				createdAt: new Date().toISOString(),
			}),
		);
	};

	const handleAddWorkout = () => {
		dispatch(
			addWorkout({
				name: `Workout ${workouts.length + 1}`,
				completedAt: null,
			}),
		);
	};

	const handleLogin = () => {
		dispatch(
			setUser({
				uid: "test-uid-123",
				email: "test@example.com",
			}),
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Redux Store Test</Text>

			<Text style={styles.sectionTitle}>Auth State</Text>
			<Text>User: {auth.user ? auth.user.email : "Not logged in"}</Text>
			<Text>Authenticated: {auth.isAuthenticated ? "Yes" : "No"}</Text>
			<Button title="Login" onPress={handleLogin} />

			<Text style={styles.sectionTitle}>Habits ({habits.length})</Text>
			{habits.map((habit) => (
				<View key={habit.id} style={styles.item}>
					<Text>
						{habit.name} - {habit.completed ? "Completed" : "Not completed"}
						(Streak: {habit.streak})
					</Text>
					<Button
						title="Toggle"
						onPress={() => dispatch(toggleHabit(habit.id))}
					/>
				</View>
			))}
			<Button title="Add Habit" onPress={handleAddHabit} />

			<Text style={styles.sectionTitle}>Workouts ({workouts.length})</Text>
			{workouts.map((workout) => (
				<View key={workout.id} style={styles.item}>
					<Text>{workout.name}</Text>
				</View>
			))}
			<Button title="Add Workout" onPress={handleAddWorkout} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 15,
		marginBottom: 10,
	},
	item: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 5,
	},
});

export default TestRedux;
