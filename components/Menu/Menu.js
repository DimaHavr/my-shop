import { useRouter } from "next/router";
import { NavbarMenu, Nav, NavLink, GlobalStyle } from "./Menu.styled";

const Menu = ({ isOpenMenu }) => {
  const router = useRouter();
  return (
    <NavbarMenu isOpenMenu={isOpenMenu}>
      <GlobalStyle isOpenMenu={isOpenMenu} />
      <Nav>
        <NavLink href="/">Головна</NavLink>

        <NavLink
          href="/women"
          active={router.pathname === "/women" ? true : undefined}
        >
          Жіночий одяг
        </NavLink>

        <NavLink
          href="/girls"
          active={router.pathname === "/kids" ? true : undefined}
        >
          Дитячий одяг
        </NavLink>
        <NavLink
          href="/sale"
          active={router.pathname === "/sale" ? true : undefined}
        >
          Sale до -50%
        </NavLink>
      </Nav>
    </NavbarMenu>
  );
};

export default Menu;
