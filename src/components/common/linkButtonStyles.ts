export const linkButtonBase =
  "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40 whitespace-nowrap";

export const linkButtonSizes = {
  sm: "text-xs px-3.5 py-2 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-base px-7 py-3.5 gap-2.5",
} as const;

export const linkButtonVariants = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30",
  secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-md",
  outline:
    "border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 backdrop-blur-sm",
  ghost:
    "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300",
  glow: "relative bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40",
} as const;

export type LinkButtonVariant = keyof typeof linkButtonVariants;
export type LinkButtonSize = keyof typeof linkButtonSizes;
