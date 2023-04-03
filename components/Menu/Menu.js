import { NavbarMenu, Nav, NavLink } from "./Menu.styled";
import { useRouter } from "next/router";

const Menu = ({ isOpenMenu }) => {
  const router = useRouter();
  return (
    <NavbarMenu isOpenMenu={isOpenMenu}>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="mens" active={router.pathname === "/mens"}>
          Mens
        </NavLink>
        <NavLink href="women" active={router.pathname === "/women"}>
          Women
        </NavLink>
        <NavLink href="boys" active={router.pathname === "/boys"}>
          Boys
        </NavLink>
        <NavLink href="girls" active={router.pathname === "/girls"}>
          Girls
        </NavLink>
        <NavLink href="sale" active={router.pathname === "/sale"}>
          Sale
        </NavLink>
      </Nav>
    </NavbarMenu>
  );
};

export default Menu;
