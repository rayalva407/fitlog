import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useAppDispatch } from '../../store/hooks';
import { signUp } from '../../services/auth';
import { Link } from 'expo-router';
import { Colors, Layout, Typography } from '../../constants';
import { Styles } from '../../utils/styles';
import Button from '@/components/ui/Button';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleSignup = async () => {
    if (!email || !password || !displayName) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password should be at least 6 characters');
      return;
    }

    setLoading(true);
    const result = await dispatch(signUp(email, password, displayName));
    setLoading(false);
    
    if (!result.success) {
      Alert.alert('Error', result.error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Create Account</Text>
        
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={displayName}
            onChangeText={setDisplayName}
            autoCapitalize="words"
          />
          
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
            onPress={handleSignup}
            disabled={loading}
			style={styles.signupButton}
          >
              {loading ? "Creating Account..." : "Sign Up"}
          </Button>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Link href="/auth/login" style={styles.link}>
            <Text style={styles.linkText}>Login</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Layout.spacing.md,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  title: {
    ...Typography.title,
    textAlign: 'center',
    marginBottom: Layout.spacing.xl,
    width: '100%',
  },
  form: {
    width: '100%',
    gap: Layout.spacing.md,
  },
  input: {
    ...Styles.input,
    width: '100%',
  },
  signupButton: {
    ...Styles.button,
    ...Styles.buttonPrimary,
    marginTop: Layout.spacing.sm,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: Colors.textLight,
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
    width: '100%',
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
