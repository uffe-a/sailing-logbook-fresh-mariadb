import { useSignal } from "@preact/signals";
import { Handlers, RouteConfig } from "$fresh/server.ts";
import { WithSession } from "@/modules/session.ts";

import { 
  FormField,
  Stack,
  Button,
  Card, CardHeader, CardBody,
  Link
} from "rfui";

//export const config: RouteConfig = {skipAppWrapper: true};
export type Data = { session: Record<string, string> };

export const handler: Handlers<Data, WithSession> = {
  GET: (_req, ctx) => {
    return ctx.render({ loginResult: true });
  },
  async POST(req , ctx) {
      const { session } = ctx.state;
      
      //const formData = await req.formData();
      //const username = formData.get("username").toLowerCase();
      //const password = formData.get("password");
      //const loginResult = await loginUser(username, password, session);			
      
      //if (!loginResult) {
      //  return ctx.render({ loginResult });
      //}
      
      //set session cookies  
      //session.set('user', loginResult._id);
      //session.set("timestamp", Date.now());
      //return new Response("", { status: 303, headers: { Location: loginResult.previous_path},});
      return new Response("", { status: 303, headers: { Location: "/sessions/"},});		
      // add some error statement
    },

};

export default function Login() {
  return (
    <div>
      <Card>
        <CardHeader>Sailing Logbook (<Link href="/sessions/">Sessions link</Link>)</CardHeader>
        <CardBody>
          <Stack>
            <FormField label="Name" type="text" />
            <FormField label="Password" type="password" value="foobar" />
            <Button>Sign in</Button>
          </Stack> 
        </CardBody>
      </Card>
    </div>
  );
}
