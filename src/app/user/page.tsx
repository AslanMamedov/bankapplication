import { store } from '@/redux/store';
import Link from 'next/link';

export default function UserPage() {
	// const data = store.getState().someData.data;
	// console.log('data----------------', data[0].title);
	return (
		<main>
			<h1>user</h1>
			<Link href={'/'}>homepage</Link>
			<br />
			<br />
			{/* <span>{data[0].title}</span> */}
			{/* <span>{store.getState().someData.data}</span> */}
		</main>
	);
}
