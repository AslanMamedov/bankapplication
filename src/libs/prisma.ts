import { PrismaClient } from '@prisma/client';

declare global {
	var prisma: PrismaClient | undefined;
}

const prisma =
	globalThis.prisma ||
	new PrismaClient({
		log: ['query'],
	});

if (process.env.NODE_ENV === 'production') {
	globalThis.prisma = prisma;
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient({
			log: ['query'],
		});
	}
}

export default prisma;
