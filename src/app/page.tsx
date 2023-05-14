import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import clsx from 'clsx';

import { Header } from '@/components/Header';
export default function HomePage() {
	return (
		<main className={clsx(inter.className, 'main')}>
			{/* <AppBarLayout /> */}

			<Header />
		</main>
	);
}
