'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
const Login = () => {
	const { data: session, status, update } = useSession();

	// const some = () => {
	// 	signIn('credentials', {
	// 		userName: 'A',
	// 		name: 'B',
	// 		email: 'C',
	// 		address: 'D',
	// 		zip: 'E',
	// 		role: 'W',
	// 		accessToken: 'Q',
	// 		soem: 'asd',
	// 		refreshToken: 'T',
	// 		redirect: false,
	// 	});
	// };
	// console.log(session);
	// const updates = async () => {
	// 	const data = await update({
	// 		...session,
	// 		user: {
	// 			...session,
	// 			agess: '1994',
	// 		},
	// 	});
	// 	console.log(data);
	// };
	if (session) {
		return (
			<>
				Signed in as {JSON.stringify(session.user)} <br />
				{/* <button onClick={updates}>update</button> */}
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn('google')}>Sign in</button>
		</>
	);
};
export default Login;
