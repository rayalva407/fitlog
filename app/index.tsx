import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FitLog Dashboard</Text>
      <View style={styles.links}>
        <Link href="/habits" style={styles.link}>
          View Habits
        </Link>
        <Link href="/workouts" style={styles.link}>
          View Workouts
        </Link>
      </View>
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
    fontWeight: 'bold',
    marginBottom: 20,
  },
  links: {
    gap: 10,
  },
  link: {
    fontSize: 18,
    color: 'blue',
  },
});
