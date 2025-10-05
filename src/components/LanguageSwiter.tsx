'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const switchLang = (locale: 'en' | 'fr') => {
        document.cookie = `locale=${locale}; path=/; max-age=31536000`;
        const segments = pathname.split('/');
        segments[1] = locale;
        router.push(segments.join('/'));
    };

    return (
        <div>
            <button onClick={() => switchLang('en')}>EN</button>
            <button onClick={() => switchLang('fr')}>FR</button>
        </div>
    );
}
