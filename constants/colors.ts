export const Colors = {
	primary: "#6366F1",
	secondary: "#EC4899",
	success: "#10B981",
	error: "#EF4444",
	background: "#F9FAFB",
	text: "#1F2937",
} as const;

export type ColorKey = keyof typeof Colors;
