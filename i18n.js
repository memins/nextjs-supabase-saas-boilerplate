import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'de'];
export const defaultLocale = 'en';

// Use the default: `always` (no prefix for the default locale)
// Use `never` if you want to always include the locale as a prefix
export const localePrefix = 'always';

export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({locales, localePrefix}); 