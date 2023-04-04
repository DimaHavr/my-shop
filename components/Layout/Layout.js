import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setShowCart } from "../../redux/cart/cartSlice";
import {
  selectShowCart,
  selectTotalQuantities,
} from "../../redux/cart/selectors";
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
  NavLogoText,
  NavLogoBox,
  NavbarBurgerBox,
  BurgerIcon,
  CloseBurgerIcon,
} from "./Layout.styled";
import Box from "../Box/Box";
import Menu from "../Menu/Menu";

const Layout = ({ pageTitle, children }) => {
  const showCart = useSelector(selectShowCart);
  const totalQuantities = useSelector(selectTotalQuantities);
  const dispatch = useDispatch();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const router = useRouter();

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
          <Link href="/">
            <NavLogoBox display="flex" gridGap="5px" alignItems="center">
              <NavLogoText>Create</NavLogoText>
              <NavLogoIcon />
            </NavLogoBox>
          </Link>
          <NavList>
            <NavItem>
              <NavLink
                href="mens"
                active={
                  router.pathname.toString() === "/mens" ? true : undefined
                }
              >
                Mens
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="women"
                active={
                  router.pathname.toString() === "/women" ? true : undefined
                }
              >
                Women
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="boys"
                active={
                  router.pathname.toString() === "/boys" ? true : undefined
                }
              >
                Boys
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="girls"
                active={
                  router.pathname.toString() === "/girls" ? true : undefined
                }
              >
                Girls
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="sale"
                active={
                  router.pathname.toString() === "/sale" ? true : undefined
                }
              >
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
              <NavButton onClick={() => dispatch(setShowCart(true))}>
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
