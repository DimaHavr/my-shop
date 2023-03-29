import { NavbarMenu, Nav, NavLink } from "./Menu.styled";

const Menu = ({ isOpenMenu }) => {
  return (
    <NavbarMenu isOpenMenu={isOpenMenu}>
      <Nav>
        <NavLink href="#">Mens</NavLink>
        <NavLink href="#">Women</NavLink>
        <NavLink href="#">Boys</NavLink>
        <NavLink href="#">Girls</NavLink>
        <NavLink style={{ color: "red" }} href="#">
          Sale
        </NavLink>
      </Nav>
    </NavbarMenu>
  );
};

export default Menu;
