import { Colors } from "./Colors";

export const Typography = {
  title: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    color: Colors.text,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold' as const,
    color: Colors.text,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: Colors.text,
  },
  body: {
    fontSize: 16,
    color: Colors.text,
  },
  caption: {
    fontSize: 14,
    color: Colors.textLight,
  },
};

export type TextVariant = keyof typeof Typography;
