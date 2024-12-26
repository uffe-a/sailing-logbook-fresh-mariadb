import { 
	Stack,
	Container 
} from "rfui";


export default ({ Component, route }: PageProps) => {
	return (
		<Container class="bg-neutral-50">	
			<Stack class="min-h-screen">
				<div>top</div>
				<div>
					<Component />
				</div>
				<div>bottom</div>
			</Stack>
		</Container>
	);
};
