'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
const Login = () => {
	const { data: session, status, update } = useSession();

	const some = () => {
		signIn('credentials', {
			password: '',
			passportNumber: 258541,
			redirect: false,
		});
	};

	const updates = async () => {
		const data = await update({
			...session,
			user: {
				...session,
				birthYear: 1994,
			},
		});
		console.log(data);
	};
	console.log(session);
	if (session) {
		return (
			<>
				Signed in as {JSON.stringify(session.user)} <br />
				<button onClick={updates}>update</button>
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			{/* <button onClick={() => signIn()}>Sign in</button> */}
			<button onClick={some}>Sign in</button>
		</>
	);
};
export default Login;
