import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShowFilter } from "../../redux/filter/selectors";
import { setShowCart } from "../../redux/cart/cartSlice";
import {
  selectShowCart,
  selectTotalQuantities,
} from "../../redux/cart/selectors";
import { selectFavoritesTotal } from "../../redux/favorites/selectors";

import ProductsFilter from "../ProductsFilter/ProductsFilter";
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
  FavoriteIconRemove,
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
  const [activePage, setActivePage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showCart = useSelector(selectShowCart);
  const totalQuantities = useSelector(selectTotalQuantities);
  const totalFavoriteQty = useSelector(selectFavoritesTotal);
  const showFilter = useSelector(selectShowFilter);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setActivePage(router.pathname);
  }, []);

  function onToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

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
                href="/women"
                active={activePage === "/women" ? "true" : ""}
                onClick={() => setActivePage("/women")}
              >
                Жіночий одяг
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/children"
                active={activePage === "/children" ? "true" : ""}
                onClick={() => setActivePage("/children")}
              >
                Дитячий одяг
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/sale"
                active={activePage === "/sale" ? "true" : ""}
                onClick={() => setActivePage("/sale")}
              >
                Sale до -50%
              </NavLink>
            </NavItem>
          </NavList>

          <ToolBar>
            <SearchBox />
            <Box display="flex" gridGap="5px">
              <NavButton>
                {totalFavoriteQty > 0 ? (
                  <Link href="/favorites">
                    <FavoriteIconRemove />
                  </Link>
                ) : (
                  <FavoriteIcon />
                )}
                <ItemQty
                  style={{ background: "none", color: "#333", padding: 0 }}
                >
                  {totalFavoriteQty}
                </ItemQty>
              </NavButton>

              <NavButton onClick={() => dispatch(setShowCart(true))}>
                <CardIcon />
                <ItemQty>{totalQuantities}</ItemQty>
              </NavButton>
            </Box>
            <NavbarBurgerBox onClick={onToggleMenu}>
              {!isMenuOpen ? <BurgerIcon /> : <CloseBurgerIcon />}
            </NavbarBurgerBox>
          </ToolBar>
        </HeaderWrapper>
      </Box>
      <Menu
        isMenuOpen={isMenuOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <Box>{children}</Box>
      {showCart && <Cart />} {showFilter && <ProductsFilter />}
      <Footer />
    </>
  );
};

export default Layout;
