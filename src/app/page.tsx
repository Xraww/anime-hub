import { redirect } from 'next/navigation';
import { getLocale } from '@/lib/getLocale';

export default async function RootPage() {
    const locale = await getLocale();
    redirect(`/${locale}`);
}