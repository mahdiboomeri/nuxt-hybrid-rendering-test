import { z } from 'zod';
import * as trpc from '@trpc/server';
import type { inferAsyncReturnType } from '@trpc/server';
import type { CompatibilityEvent } from 'h3';

export const createContext = ({ req }: CompatibilityEvent) => {
	const getUserFromHeader = () => {
		return {
			user: 1
		};
	};

	const user = getUserFromHeader();

	return {
		user,
	};
};

type Context = inferAsyncReturnType<typeof createContext>;

export const router = trpc
	.router<Context>()
	.middleware(({ ctx, next }) => {
		if (!ctx.user) throw new trpc.TRPCError({ code: 'UNAUTHORIZED' });

		return next();
	});
