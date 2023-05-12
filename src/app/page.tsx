import { Counter } from '@/components/Counter';
import Login from '@/components/Login';
import { setData } from '@/redux/someData/someDataSlice';
import { store } from '@/redux/store';
import Link from 'next/link';

export default async function HomePage() {
	// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	// const data = await response.json();

	// store.dispatch(setData(data));
	return (
		<main>
			<h1>Bank app</h1>
			<Counter />
			<Link href={'/user'}>user -Page</Link>
			<br />
			<br />
			<Login />
		</main>
	);
}
