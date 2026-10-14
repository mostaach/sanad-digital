export type Locale = 'en';
export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en'];
export function getDirection(locale: string): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
