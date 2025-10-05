import { cookies, headers } from 'next/headers';

const SUPPORTED_LOCALES = ['en', 'fr'] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

export async function getLocale(): Promise<Locale> {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('locale')?.value;

    if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale as Locale)) {
        return cookieLocale as Locale;
    }

    const headersStore = await headers();
    const acceptLang = headersStore.get('accept-language') || '';
    if (acceptLang.startsWith('fr')) return 'fr';

    return 'en';
}