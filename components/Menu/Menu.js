import { NavbarMenu, Nav, NavLink } from "./Menu.styled";

const Menu = ({ isOpenMenu }) => {
  return (
    <NavbarMenu isOpenMenu={isOpenMenu}>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="mens">Mens</NavLink>
        <NavLink href="women">Women</NavLink>
        <NavLink href="boys">Boys</NavLink>
        <NavLink href="girls">Girls</NavLink>
        <NavLink style={{ color: "red" }} href="sale">
          Sale
        </NavLink>
      </Nav>
    </NavbarMenu>
  );
};

export default Menu;
