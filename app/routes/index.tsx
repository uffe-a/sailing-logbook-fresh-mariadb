import { useSignal } from "@preact/signals";

import { 
  FormField,
  Stack,
  Button,
  Card, CardHeader, CardBody
} from "rfui";

export default function Login() {
  return (
    <div>
      <Card>
        <CardHeader>Sailing Logbook</CardHeader>
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
