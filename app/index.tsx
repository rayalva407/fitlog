import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Colors, Layout, Typography } from '../constants';
import { Styles } from '../utils/styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FitLog Dashboard</Text>
      
      <View style={styles.buttonContainer}>
        <Link href="/habits" style={[Styles.button, Styles.buttonPrimary, styles.link]}>
          <Text style={styles.buttonText}>View Habits</Text>
        </Link>
        
        <Link href="/workouts" style={[Styles.button, Styles.buttonSecondary, styles.link]}>
          <Text style={styles.buttonText}>View Workouts</Text>
        </Link>
      </View>
      
      <View style={[Styles.card, styles.welcomeCard]}>
        <Text style={styles.welcomeTitle}>Welcome to FitLog!</Text>
        <Text style={styles.welcomeText}>
          Track your habits and workouts with our easy-to-use app.
        </Text>
        <View style={[Styles.row, styles.tagsContainer]}>
          <Text style={[styles.tag, styles.tagSuccess]}>Healthy</Text>
          <Text style={[styles.tag, styles.tagWarning]}>Active</Text>
          <Text style={[styles.tag, styles.tagPrimary]}>Productive</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
    ...Styles.centered,
  },
  title: {
    ...Typography.title,
    marginBottom: Layout.spacing.xl,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    gap: Layout.spacing.md,
    marginBottom: Layout.spacing.xl,
  },
  link: {
    width: '100%',
  },
  buttonText: {
    color: Colors.card,
    fontWeight: '600',
    fontSize: 16,
  },
  welcomeCard: {
    width: '100%',
    maxWidth: 300,
  },
  welcomeTitle: {
    ...Typography.heading,
    marginBottom: Layout.spacing.sm,
  },
  welcomeText: {
    ...Typography.body,
    marginBottom: Layout.spacing.md,
    color: Colors.textLight,
  },
  tagsContainer: {
    gap: Layout.spacing.sm,
    flexWrap: 'wrap' as const,
  },
  tag: {
    paddingVertical: Layout.spacing.xs,
    paddingHorizontal: Layout.spacing.sm,
    borderRadius: Layout.borderRadius.lg,
    fontSize: 12,
    fontWeight: '600' as const,
    color: Colors.card,
  },
  tagSuccess: {
    backgroundColor: Colors.success,
  },
  tagWarning: {
    backgroundColor: Colors.warning,
  },
  tagPrimary: {
    backgroundColor: Colors.primary,
  },
});
