import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/libs/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { cookies, headers } from 'next/headers';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateTokens } from '@/libs/generateTokens';
type Body = Omit<User, 'refreshToken' | 'accessToken' | 'id' | 'updatedAt' | 'createdAt'> & {};

export async function POST(request: NextRequest, response: NextResponse) {
	const {
		birthday,
		familyName,
		gender,
		name,
		nationality,
		passportExpirationDate,
		passportNumber,
		password,
		personalNumber,
		phoneNumber,
		placeOfRegistration,
		placeOfResidence,
		surname,
	}: Body = await request.json();

	const haspasport = await bcrypt.hash(password, 8);
	const { accessToken, refreshToken } = generateTokens(phoneNumber);
	const data = {
		familyName,
		name,
		password: haspasport,
		surname,
		placeOfRegistration,
		placeOfResidence,
		nationality,
		passportExpirationDate,
		passportNumber: +passportNumber,
		personalNumber: +personalNumber,
		phoneNumber,
		gender,
		birthday,
		accessToken,
		refreshToken,
	};

	try {
		const user = await prisma.user.create({
			data: { ...data },
		});
		console.log(user);
		return new Response(JSON.stringify({ ...user }), {
			status: 200,
			headers: {
				'Set-Cookie': `refreshToken=${refreshToken};  Max-Age=2592000; httpOnly`,
			},
		});
	} catch (error) {
		console.log(error);
	}
}
