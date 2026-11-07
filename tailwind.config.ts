import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#111827", violet: { 50: "#f5f3ff", 100: "#ede9fe", 500: "#7c3aed", 600: "#6d28d9", 700: "#5b21b6" } }, boxShadow: { soft: "0 12px 32px rgba(30, 27, 75, .08)" } }, }, plugins: [] } satisfies Config;
