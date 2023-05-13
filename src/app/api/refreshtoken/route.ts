import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { headers, cookies } from 'next/headers';
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest, response: NextResponse) {
	const token = jwt.sign(
		{
			payload: {
				name: 'Aslan',
				age: 28,
			},
		},
		'secret',
		{
			expiresIn: 60 * 1,
		}
	);

	return new NextResponse(JSON.stringify(token), { status: 202 });
}

interface IPayload {
	payload: {
		name: string;
		age: number;
	};
}

export async function GET(request: NextRequest) {
	const data = await bcrypt.hash('asd', 10);
	console.log('bcrypt--->', data);
	const header = headers().get('authorization');
	const token = header?.split(' ')[1];
	if (token) {
		try {
			const decode = jwt.verify(token, 'secret', {
				complete: false,
			}) as IPayload;
			if (decode) {
				return new NextResponse(JSON.stringify(decode.payload), { status: 202 });
			}
		} catch (error) {
			return new NextResponse(JSON.stringify('Error'), { status: 202 });
		}
	}
}
