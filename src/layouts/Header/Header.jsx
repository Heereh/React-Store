import { useContext, useState } from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import AuthContext from '../../context/AuthContext';
import { NavLinkStyled } from './HeaderStyled';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isAuth, user, handleLogout } = useContext(AuthContext);

  const menuItems = [
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  return (
    <Navbar
      className="dark text-foreground bg-background "
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred={false}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">TESTING</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/products" aria-current="page">
              Productos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact">
              Contacto
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <NavLinkStyled to={isAuth ? `/user/${user}` : '/login'}>
              {isAuth ? 'Perfil' : 'Login'}
            </NavLinkStyled>
          </NavbarItem>
          <NavLinkStyled>
            {isAuth ? (
              <Button
                as={Link}
                className="bg-red-700"
                onClick={() => {
                  handleLogout();
                }}
              >
                Cerrar Sesión
              </Button>
            ) : (
              <Button
                as={Link}
                href="/register"
                className=""
                color="primary"
                variant="flat"
              >
                Registrate
              </Button>
            )}
          </NavLinkStyled>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
