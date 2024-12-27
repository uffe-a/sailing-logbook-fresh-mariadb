//import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.0/mod.ts";

export async function loginUser(username, password, session){	

	//const user = await searchObjects("users", {$or: [{username: username}, {email: username}]});
	//if (user.length != 1) {
	//	return false;
	//}	
	
	// check validate password
	//const authResult = await bcrypt.compareSync(password, user[0].password);
	//if (authResult) {
	//	session.set("user", user._id);
	//	session.set("timestamp", Date.now());
	//	return user[0];
	//}
	//else {
	//	return authResult;
	/}
}
