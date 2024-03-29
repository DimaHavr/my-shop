import Image from "next/image";
import styled from "styled-components";
import { FaOpencart } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

import Link from "next/link";

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 100;
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
    padding: 25px 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 15px 30px;
    gap: 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 15px 20px;
    gap: 10px;
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
  @media (max-width: 960px) {
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

export const DropDownLink = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #333;
  text-decoration: none;
`;
export const ItemDropdown = styled.li`
  padding: 5px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    backdrop-filter 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: rgba(46, 46, 46, 0.31);
    ${DropDownLink} {
      &:hover,
      &:focus {
        color: #333;
      }
    }
  }
  &:not(:last-child) {
    border-bottom: 1px solid #33333338;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;
export const NavLink = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ active }) => (active ? "#17696a;" : "#333;")};
  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* &:after {
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
  } */

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: #333;
  }

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
  gap: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const NavLogoText = styled(Image)`
  min-width: 130px;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const NavLogoIcon = styled(Image)`
  min-width: 45px;
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
  align-items: center;
  gap: 5px;
`;

export const CardIcon = styled(FaOpencart)`
  cursor: pointer;
  width: 25px;
  height: 18px;
  color: #17696a;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const FavoriteIcon = styled(MdOutlineFavoriteBorder)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: #17696a;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const FavoriteIconRemove = styled(MdFavorite)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  color: #17696a;
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
  display: flex;
  cursor: pointer;
  border: none;
  background: none;
  display: none;
  @media (max-width: 960px) {
    display: flex;
  }
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
  cursor: pointer;
  width: 34px;
  height: 34px;
  fill: #17696a;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
export const CloseBurgerIcon = styled(TfiClose)`
  z-index: 4;
  cursor: pointer;
  width: 34px;
  height: 34px;
  fill: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
