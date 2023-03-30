import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useStateContext } from "../../context/StateContext";
const Cart = dynamic(() => import("../Cart/Cart"));
const Footer = dynamic(() => import("../Footer/Footer"));

import SearchBox from "../SearchBox/SearchBox";
import {
  HeaderWrapper,
  NavList,
  NavItem,
  NavLink,
  NavButton,
  CardIcon,
  NavLogoIcon,
  ItemQty,
  FavoriteIcon,
  ToolBar,
  NavLogoLink,
  NavLogoBox,
  NavbarBurgerBox,
  BurgerIcon,
  CloseBurgerIcon,
} from "./Layout.styled";
import Box from "../Box/Box";
import Menu from "../Menu/Menu";

const Layout = ({ pageTitle, children }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function onToggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }
  function closeMenu() {
    setIsOpenMenu(false);
  }
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Shop..." />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Box>
        <HeaderWrapper>
          <NavLogoBox display="flex" gridGap="5px" alignItems="center">
            <NavLogoLink href="#">Create</NavLogoLink> <NavLogoIcon />
          </NavLogoBox>
          <NavList>
            <NavItem>
              <NavLink href="#">Mens</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Women</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Boys</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Girls</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "red" }} href="#">
                Sale
              </NavLink>
            </NavItem>
          </NavList>

          <ToolBar>
            <SearchBox />
            <Box display="flex" gridGap="5px">
              <NavButton>
                <FavoriteIcon />
                <ItemQty
                  style={{ background: "none", color: "#333", padding: 0 }}
                >
                  {totalQuantities}
                </ItemQty>
              </NavButton>
              <NavButton onClick={() => setShowCart(true)}>
                <CardIcon />
                <ItemQty>{totalQuantities}</ItemQty>
              </NavButton>
            </Box>
            <NavbarBurgerBox onClick={onToggleMenu}>
              <BurgerIcon isOpenMenu={isOpenMenu} />
              <CloseBurgerIcon isOpenMenu={isOpenMenu} />
            </NavbarBurgerBox>
          </ToolBar>
        </HeaderWrapper>
      </Box>
      <Menu isOpenMenu={isOpenMenu} closeMenu={closeMenu} />
      <Box>{children}</Box>
      {showCart && <Cart />}
      <Footer />
    </>
  );
};

export default Layout;
