import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from './auth/[...nextauth]/route';

export async function GET(request: NextRequest, response: Response) {
	const session = await getServerSession(authOptions);
	console.log(session?.user);
	// console.log(request);
	// return NextResponse.json({ data: 'Bank APP' });
	// return new Response(JSON.stringify({ data: 'Bank APP' }), {
	// 	status: 202,
	// });
	// response.headers.set('asdasd', 'asdasd');
	// return new NextResponse(JSON.stringify({ data: 'Bank APP' }), { status: 202 });
	return new Response(JSON.stringify({ data: 'Bank APP' }), {
		status: 200,

		headers: { 'set-session': `token=${'aaaaaaaaaaaa'}` },
		statusText: '',
	});
}
