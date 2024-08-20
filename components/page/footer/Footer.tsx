import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
    const t = await getTranslations('');
    return (
        <footer className="w-full h-auto flex justify-around items-center gap-4 bg-blackest text-white">
            <p>{t('footer.copyright')}</p>
            <div className="w-auto flex justify-center items-center gap-4 p-4">
                <Image src="https://i.imgur.com/hDw7gZi.png" alt="Tiktok" className="rounded-full p-2 bg-white hover:animate-pulse" width="40" height="40" />
                <Image src="https://i.imgur.com/rceQc6s.png" alt="Discord" className="rounded-full p-2 bg-white hover:animate-pulse" width="40" height="40" />
                <Image src="https://i.imgur.com/cBATTW7.png" alt="Youtube" className="rounded-full p-2 bg-white hover:animate-pulse" width="40" height="40" />
            </div>
        </footer>
    );
}