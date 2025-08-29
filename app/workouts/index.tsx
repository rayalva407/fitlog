import { View, Text, StyleSheet } from "react-native";

export default function WorkoutsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>My Workouts</Text>
			{/* Workout list will go here later */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
});
