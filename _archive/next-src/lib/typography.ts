/**
 * Shared typography scale locked to the homepage.
 * Prefer these over one-off text-* / font-* combinations for titles & subtitles.
 */
export const typo = {
  /** Small uppercase label above a section */
  eyebrow:
    "text-xs font-bold uppercase tracking-[0.2em]",

  /** Page hero H1 */
  heroTitle:
    "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",

  /** Hero / section supporting copy */
  subtitle:
    "text-base sm:text-lg leading-relaxed",

  /** Primary section H2 */
  sectionTitle:
    "text-3xl sm:text-4xl font-bold tracking-tight",

  /** Card / tile title */
  cardTitle:
    "text-lg font-bold",

  /** In-page content H2/H3 below a section (legal, article body, forms) */
  contentTitle:
    "text-xl sm:text-2xl font-bold tracking-tight",
} as const;

export type TypoKey = keyof typeof typo;
