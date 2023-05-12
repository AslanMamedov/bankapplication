import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge'; // 'nodejs' is the default
export async function GET(request: NextRequest) {
	// console.log(request);
	// return NextResponse.json({ data: 'Bank APP' });
	// return new Response(JSON.stringify({ data: 'Bank APP' }), {
	// 	status: 202,
	// });

	 return new NextResponse(JSON.stringify({ data: 'Bank APP' }), { status: 202 });
}
