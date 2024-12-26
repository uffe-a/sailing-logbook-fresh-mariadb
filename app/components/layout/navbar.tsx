import {
	Navbar,
	NavbarItem,
	NavbarLeft,
} from "rfui";

export const Navbar = ({ route }: { route: string }) => {
	return (
		<Navbar size="xl">
			<NavbarLeft>
				<NavbarItem href="https://one.com">One</NavbarItem>
				<NavbarItem href="https://two.com">Two</NavbarItem>
			</NavbarLeft>
		</Navbar>
	);
};
