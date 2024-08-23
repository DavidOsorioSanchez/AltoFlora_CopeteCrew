import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
    const t = await getTranslations('');
    return (
        <footer className="w-full h-auto flex justify-around items-center gap-4 mt-6 bg-blackest text-white">
            <p>{t('footer.copyright')}</p>
            <div className="w-auto flex justify-center items-center gap-4 p-4">
                <Link href="https://www.tiktok.com/@tiktok.com" target="_blank" rel="noreferrer">
                    <Image src="https://i.imgur.com/hDw7gZi.png" alt="Tiktok" className="rounded-full p-2 bg-white hover:animate-pulse" width="40" height="40" />
                </Link>
                <Link href="https://discord.gg/s7tez4YjzD" target="_blank">
                    <Image src="https://i.imgur.com/rceQc6s.png" alt="Discord" className="rounded-full p-2 bg-white hover:animate-pulse" width="40" height="40" />
                </Link>
                <Link href="https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA" target="_blank" rel="noreferrer">
                    <Image src="https://i.imgur.com/cBATTW7.png" alt="Youtube" className="rounded-full p-2 bg-white hover:animate-pulse" width="40" height="40" />
                </Link>
            </div>
        </footer>
    );
}