import jwt from 'jsonwebtoken';

interface GenerateTokens {
	accessToken: string;
	refreshToken: string;
}

export const generateTokens = <T>(payload: T): GenerateTokens => {
	const accessToken: string = jwt.sign(
		{
			payload,
		},
		process.env.JWT_ACCESS_TOKEN_SECRET as string,
		{ expiresIn: '5m' }
	);
	const refreshToken: string = jwt.sign(
		{
			payload,
		},
		process.env.JWT_REFRESH_TOKEN_SECRET as string,
		{ expiresIn: '30d' }
	);
	return { accessToken, refreshToken };
};
