import { Stack } from "rfui";
import { Navbar } from "@/components/layout/navbar.tsx";

export default ({ Component, route }: PageProps) => {
	return (
		<Stack class="min-h-screen">
			<Navbar route={route} />
			<div>
				<Component />
			</div>
			<div>bottom</div>
		</Stack>
	);
};
