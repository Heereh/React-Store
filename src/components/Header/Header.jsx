import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
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
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const { currentUser } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
					<a href="/">
						<p className="font-bold text-inherit">LOOKSTORE</p>
					</a>

					<NavbarMenu>
						<NavbarMenuItem>
							<Link
								color="primary"
								className="w-full"
								onClick={() => {
									navigate('/');
								}}
								size="lg">
								Home
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Link
								color="primary"
								className="w-full"
								size="lg"
								onClick={() => {
									navigate('products');
								}}>
								Productos
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Link
								color="primary"
								className="w-full"
								onClick={() => {
									navigate('contact');
								}}
								href="FooterContainerStyled"
								size="lg">
								Contacto
							</Link>
						</NavbarMenuItem>
					</NavbarMenu>
				</NavbarBrand>
				<NavbarContent
					className="hidden sm:flex gap-4"
					justify="center">
					<NavbarItem>
						<Link
							color="foreground"
							href="/">
							Home
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link
							href="/products"
							aria-current="page">
							Productos
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link
							color="foreground"
							href="/contact">
							Contacto
						</Link>
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
									key="team_settings"
									isDisabled>
									Team Settings
								</DropdownItem>
								<DropdownItem
									key="analytics"
									isDisabled>
									Analytics
								</DropdownItem>
								<DropdownItem
									key="system"
									isDisabled>
									System
								</DropdownItem>
								<DropdownItem
									key="configurations"
									isDisabled>
									Configurations
								</DropdownItem>
								<DropdownItem
									key="help_and_feedback"
									isDisabled>
									Help & Feedback
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
							href={
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
