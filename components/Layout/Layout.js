import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const ProductsCatalog = dynamic(() =>
  import("../ProductsCatalog/ProductsCatalog")
);
const Footer = dynamic(() => import("../Footer/Footer"));

import {
  HeaderWrapper,
  Nav,
  NavList,
  NavItem,
  NavLink,
  NavLinkLogo,
  NavLogo,
  NavButton,
  ContactIcon,
  NavLogoIcon,
} from "./Layout.styled";

const Layout = (props) => {
  const router = useRouter();

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
            <NavLinkLogo href="#">Kids</NavLinkLogo>
          </NavLogo>
          <NavList>
            <NavItem>
              <NavLink href="/">Головна</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/shop">Магазин</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Про нас</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Контакт</NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <ContactIcon />
      </HeaderWrapper>
      <ProductsCatalog />

      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
