import { NavbarMenu, Nav, NavLink, GlobalStyle } from "./Menu.styled";

const Menu = ({ isMenuOpen, activePage, setActivePage }) => {
  return (
    <NavbarMenu isMenuOpen={isMenuOpen}>
      <GlobalStyle isMenuOpen={isMenuOpen} />
      <Nav>
        <NavLink
          href="/"
          active={activePage === "/" ? "true" : ""}
          onClick={() => setActivePage("/")}
        >
          Головна
        </NavLink>

        <NavLink
          href="/women"
          active={activePage === "/women" ? "true" : ""}
          onClick={() => setActivePage("/women")}
        >
          Жіночий одяг
        </NavLink>

        <NavLink
          href="/children"
          active={activePage === "/children" ? "true" : ""}
          onClick={() => setActivePage("/children")}
        >
          Дитячий одяг
        </NavLink>
        <NavLink
          href="/sale"
          active={activePage === "/sale" ? "true" : ""}
          onClick={() => setActivePage("/sale")}
        >
          Sale до -50%
        </NavLink>
      </Nav>
    </NavbarMenu>
  );
};

export default Menu;
