import styled from "styled-components";
import { FaOpencart } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FaXbox } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";

import Link from "next/link";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 130px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  box-shadow: inset -0.5px 0px 13.5px -6px rgba(0, 0, 0, 0.43);
  @media screen and (max-width: 1080px) {
    padding: 25px 80px;
  }
  @media screen and (max-width: 768px) {
    padding: 15px 30px;
    gap: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 1280px) {
    gap: 20px;
  }
  @media screen and (max-width: 1080px) {
    gap: 15px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    text-decoration: none;
    transform: scale(1.05);
  }
`;

export const NavLink = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #333;
  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: #17696a;
    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: 0.4s;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: #333;
  }

  ${(props) =>
    props.active &&
    `
    color: #17696a;
  `}

  @media (max-width: 480px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.88;
  }
`;

export const NavLogoBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const NavLogoText = styled.p`
  font-weight: 900;
  font-size: 24px;
  line-height: 1.36;
  max-width: 585px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #333;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #333;
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const NavLogoIcon = styled(FaXbox)`
  width: 25px;
  height: 25px;
  color: #17696a;
`;

export const ToolBar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
`;

export const NavButton = styled.button`
  position: relative;
  background: none;
  border: none;
  display: flex;
  gap: 5px;
`;

export const CardIcon = styled(FaOpencart)`
  cursor: pointer;
  width: 25px;
  height: 18px;
  color: #424551;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const FavoriteIcon = styled(GrFavorite)`
  cursor: pointer;
  width: 25px;
  height: 18px;
  color: #424551;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const ItemQty = styled.span`
  font-family: "LatoBold";
  font-weight: 900;
  font-size: 12px;
  line-height: 18px;
  background: #17696a;
  border-radius: 4px;
  padding: 1px 8px;
  color: #ffffff;
`;

export const NavbarBurgerBox = styled.button`
  z-index: 4;
  display: flex;
  cursor: pointer;
  border: none;
  background: none;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
  cursor: pointer;
  width: 34px;
  height: 34px;
  fill: #000;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: ${({ isOpenMenu }) => (isOpenMenu ? "none" : "flex")};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
export const CloseBurgerIcon = styled(TfiClose)`
  cursor: pointer;
  width: 34px;
  height: 34px;
  fill: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: ${({ isOpenMenu }) => (isOpenMenu ? "flex" : "none")};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
