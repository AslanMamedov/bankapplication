import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/libs/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { cookies, headers } from 'next/headers';
export async function POST(request: NextRequest, response: NextResponse) {
	const body = await request.json();
	console.log(body);
	return new Response(JSON.stringify(body), {
		status: 200,
		// headers: {
		// 	'Set-Cookie': 'refreshToken=Aslan;  Max-Age=2592000; httpOnly',
		// },
	});
}
