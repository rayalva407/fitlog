import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useAppDispatch } from '../../store/hooks';
import { logIn } from '../../services/auth';
import { Link } from 'expo-router';
import { Colors, Layout, Typography } from '../../constants';
import { Styles } from '../../utils/styles';
import Button from '@/components/ui/Button';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    const result = await dispatch(logIn(email, password));
    setLoading(false);
    
    if (!result.success) {
      Alert.alert('Error', result.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Button
		  variant="primary"
          onPress={handleLogin}
          disabled={loading}
	      style={styles.loginButton}
        >
            {loading ? "Logging in..." : "Login"}
        </Button>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <Link href="/auth/signup" style={styles.link}>
          <Text style={styles.linkText}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Layout.spacing.md,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center', // Add this to center horizontally
  },
  title: {
    ...Typography.title,
    textAlign: 'center',
    marginBottom: Layout.spacing.xl,
  },
  form: {
    width: '100%',
    maxWidth: 300,
    gap: Layout.spacing.md,
    alignItems: 'center', // Add this to center form elements
  },
  input: {
    ...Styles.input,
    width: '100%', // Ensure inputs take full width of form
  },
  loginButton: {
    marginTop: Layout.spacing.sm,
    width: '100%', // Make button full width
  },
  buttonText: {
    color: Colors.card,
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Layout.spacing.xl,
  },
  footerText: {
    ...Typography.body,
    color: Colors.textLight,
  },
  link: {
    marginLeft: Layout.spacing.xs,
  },
  linkText: {
    ...Typography.body,
    color: Colors.primary,
    fontWeight: '600',
  },
});
