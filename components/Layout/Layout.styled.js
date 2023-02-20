import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineToys } from "react-icons/md";
import Link from "next/link";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  z-index: 100;
  background-color: #333;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-shadow: inset -0.5px 0px 13.5px -6px rgba(0, 0, 0, 0.43);
  @media (max-width: 480px) {
    padding: 15px 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
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

export const NavLinkLogo = styled.a`
  font-weight: 900;
  font-size: 24px;
  line-height: 1.36;
  max-width: 585px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: #ffff00;
    text-decoration-color: #333;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  text-decoration: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: #ffff00;
  }

  @media (max-width: 480px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.88;
  }
`;

export const NavLogo = styled.p`
  display: flex;
  align-items: center;
  margin-right: 50px;
  @media (max-width: 580px) {
    margin-right: 5px;
  }
`;

export const NavLogoIcon = styled(MdOutlineToys)`
  width: 35px;
  height: 35px;
  margin-right: 5px;
  color: #ffff00;
`;

export const NavButton = styled.button`
  display: block;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #000;
  cursor: pointer;
  background-color: #ffff00;
  border: 0px;
  border-radius: 4px;
  padding: 10px 30px;
  box-shadow: 0 18px 28px 2px rgba(0, 0, 0, 0.43);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.04);
    color: #ffff00;
    background: #333;
  }

  &:hover,
  &:focus {
    background-color: #fff;
    color: #000;
    transform: scale(1.03);
    box-shadow: 0 18px 28px 2px rgba(0, 0, 0, 0.53);
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const ContactIcon = styled(TiShoppingCart)`
  cursor: pointer;
  width: 45px;
  height: 45px;
  color: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: #ffff00;
  }
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;
