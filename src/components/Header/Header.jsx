import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link as LinkNextUi,
	Button,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Avatar,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/react';
import { NavLinkStyled } from './HeaderStyled';
import { IoCartOutline } from 'react-icons/io5';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userslice';
import { Link } from 'react-router-dom';

const Header = () => {
	const { currentUser } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar
			classNames="flex"
			className="dark text-foreground bg-background "
			isBordered
			isBlurred={false}
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarBrand className="gap-5">
					<NavbarMenuToggle
						className="sm:hidden"
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					/>
					<NavLinkStyled
						to="/"
						title={true}>
						<p
							title
							className="font-bold text-inherit">
							LOOKSTORE
						</p>
					</NavLinkStyled>

					<NavbarMenu>
						<NavbarMenuItem>
							<LinkNextUi
								color="primary"
								className="w-full"
								size="lg"
								href="/">
								Home
							</LinkNextUi>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<LinkNextUi
								color="second"
								className="w-full"
								href="/products"
								size="lg">
								Productos
							</LinkNextUi>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<LinkNextUi
								color="primary"
								className="w-full"
								href="/contact"
								size="lg">
								Contacto
							</LinkNextUi>
						</NavbarMenuItem>
					</NavbarMenu>
				</NavbarBrand>
				<NavbarContent
					className="hidden sm:flex gap-4"
					justify="center">
					<NavbarItem>
						<NavLinkStyled
							color="foreground"
							to="/">
							Home
						</NavLinkStyled>
					</NavbarItem>
					<NavbarItem isActive>
						<NavLinkStyled
							to="products"
							aria-current="page">
							Productos
						</NavLinkStyled>
					</NavbarItem>
					<NavbarItem>
						<NavLinkStyled
							color="foreground"
							to="contact">
							Contacto
						</NavLinkStyled>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem className=" flex">
						<NavLinkStyled to="/cart">
							<IoCartOutline />
						</NavLinkStyled>
					</NavbarItem>
					{currentUser ? (
						<Dropdown placement="bottom-end">
							<DropdownTrigger>
								<Avatar
									isBordered
									as="button"
									className="transition-transform"
									color="secondary"
									size="sm"
									showFallback
									src="https://images.unsplash.com/broken"
								/>
							</DropdownTrigger>
							<DropdownMenu
								aria-label="Profile Actions"
								variant="flat">
								<DropdownItem
									key="profile"
									className="h-14 gap-2">
									<p className="font-semibold">Signed in as</p>
									<p className="font-semibold">{currentUser.nombre}</p>
								</DropdownItem>
								<DropdownItem
									key="settings"
									to={Link}
									color="success"
									href={`/user/${currentUser.nombre}`}>
									My Settings
								</DropdownItem>
								<DropdownItem
									to={Link}
								>
									Historial
								</DropdownItem>
								
								<DropdownItem
									key="logout"
									color="danger"
									onClick={() => {
										dispatch(setCurrentUser(null));
									}}>
									Log Out
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					) : (
						<Button
							as={Link}
							className="ButtonActive"
							color="primary"
							variant="flat"
							to={
								currentUser
									? `${`/user${currentUser.nombre}`}`
									: `${'/register'}`
							}>
							Acceder
						</Button>
					)}
				</NavbarContent>
			</NavbarContent>
		</Navbar>
	);
};

export default Header;
