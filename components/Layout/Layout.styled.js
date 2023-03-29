import styled from "styled-components";
import { FaOpencart } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FaXbox } from "react-icons/fa";
import Link from "next/link";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 25px 130px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-shadow: inset -0.5px 0px 13.5px -6px rgba(0, 0, 0, 0.43);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
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
  gap: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const NavLogoLink = styled(Link)`
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
`;

export const NavLogoIcon = styled(FaXbox)`
  width: 25px;
  height: 25px;
  color: #17696a;
`;

export const ToolBar = styled.div`
  display: flex;
  gap: 10px;
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
  background: #03cea4;
  border-radius: 4px;
  padding: 1px 8px;
  color: #ffffff;
`;
