import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Colors, Layout } from '../../constants';
import { Styles } from '../../utils/styles';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: string;
}

export default function Button({ variant = 'primary', children, style, ...props }: ButtonProps) {
  const variantStyles = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    outline: styles.buttonOutline,
  };

  const textStyles = {
    primary: styles.textPrimary,
    secondary: styles.textSecondary,
    outline: styles.textOutline,
  };

  return (
    <TouchableOpacity
      style={[Styles.button, variantStyles[variant], style]}
      {...props}
    >
      <Text style={[styles.buttonText, textStyles[variant]]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: Colors.primary,
  },
  buttonSecondary: {
    backgroundColor: Colors.secondary,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
  },
  textPrimary: {
    color: Colors.card,
  },
  textSecondary: {
    color: Colors.card,
  },
  textOutline: {
    color: Colors.primary,
  },
});
