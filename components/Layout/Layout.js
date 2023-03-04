import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
const Cart = dynamic(() => import("../Cart/Cart"));
const Footer = dynamic(() => import("../Footer/Footer"));
const ProductsCatalog = dynamic(() =>
  import("../ProductsCatalog/ProductsCatalog")
);
import {
  HeaderWrapper,
  Nav,
  NavList,
  NavItem,
  NavLink,
  NavLinkLogo,
  NavLogo,
  NavButton,
  CardIcon,
  NavLogoIcon,
  CardItemQty,
} from "./Layout.styled";

const Layout = (props) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const handleOpenModal = () => {
    setShowCart(true);
  };

  const handleCloseModal = () => {
    setShowCart(false);
  };

  useEffect(() => {
    document.body.style.overflow = showCart ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCart]);

  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Shop..." />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <HeaderWrapper>
        <Nav>
          <NavLogo>
            <NavLogoIcon />
            <NavLinkLogo href="/">Kids</NavLinkLogo>
          </NavLogo>
          <NavList>
            <NavItem>
              <NavLink href="/">Головна</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/shop">Магазин</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Контакт</NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <NavButton onClick={handleOpenModal}>
          <CardIcon />
          {totalQuantities !== 0 && (
            <CardItemQty>{totalQuantities}</CardItemQty>
          )}
        </NavButton>
      </HeaderWrapper>
      <ProductsCatalog />

      <div>{props.children}</div>
      <Footer />
      {showCart && <Cart onClose={handleCloseModal} />}
    </>
  );
};

export default Layout;
