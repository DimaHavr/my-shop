import Head from "next/head";
import dynamic from "next/dynamic";
import { useStateContext } from "../../context/StateContext";
const Cart = dynamic(() => import("../Cart/Cart"));
const Footer = dynamic(() => import("../Footer/Footer"));
import SearchBox from "../SearchBox/SearchBox";
import {
  HeaderWrapper,
  Nav,
  NavList,
  NavItem,
  NavLink,
  NavLogoText,
  NavLogo,
  NavButton,
  CardIcon,
  NavLogoIcon,
  ItemQty,
  ContainerStyled,
  FavoriteIcon,
  ToolBar,
  NavLogoLink,
  NavLogoBox,
} from "./Layout.styled";
import Box from "../Box/Box";
import { color } from "styled-system";

const Layout = ({ pageTitle, children }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

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
          <Nav>
            <NavLogoBox display="flex" gridGap="5px" alignItems="center">
              <NavLogoLink href="#">Create</NavLogoLink> <NavLogoIcon />
            </NavLogoBox>
            <NavList>
              <NavLink href="#">Mens</NavLink>
              <NavLink href="#">Women</NavLink>
              <NavLink href="#">Boys</NavLink>
              <NavLink href="#">Girls</NavLink>
              <NavLink style={{ color: "red" }} href="#">
                Sale
              </NavLink>
            </NavList>
            <SearchBox />
            <ToolBar>
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
            </ToolBar>
          </Nav>
        </HeaderWrapper>
      </Box>

      <Box>{children}</Box>
      {showCart && <Cart />}
      <Footer />
    </>
  );
};

export default Layout;
