import { Client } from "@/modules/mariadb.ts";

const hostname = Deno.env.get("MARIADB_HOSTNAME");
const db = Deno.env.get("MARIADB_DATABASE");
const username = Deno.env.get("MARIADB_USERNAME");
const password = Deno.env.get("MARIADB_PASSWORD");

const mariaDbClient = await new Client().connect({
  hostname: hostname,
  username: username,
  db: db,
  password: password,
});


//const users = await client.query(`select * from users`);
//console.log(users)

export default mariaDbClient;