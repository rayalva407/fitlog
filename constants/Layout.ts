import { Dimensions } from 'react-native';

export const Layout = {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
};

export type SpacingKey = keyof typeof Layout.spacing;
export type BorderRadiusKey = keyof typeof Layout.borderRadius;
