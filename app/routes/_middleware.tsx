import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { cookieSession, WithSession } from "@/modules/session.ts";

import { User } from "@/services/interfaces.ts";

let session;
if (Deno.env.get("SESSION_STORAGE") == "COOKIE") {
	const sessionTimeout = Deno.env.get("SESSION_TIMEOUT");
	session = cookieSession({maxAge: sessionTimeout});
}
else if (Deno.env.get("SESSION_STORAGE") == "REDIS") {
	const sessionPrefix = Deno.env.get("SESSION_PREFIX");
	const sessionTimeout = Deno.env.get("SESSION_TIMEOUT");
	session = redisSession(redis, {keyPrefix: sessionPrefix, maxAge: sessionTimeout});
}

export type State = { user:User } & WithSession;