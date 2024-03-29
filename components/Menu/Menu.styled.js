import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ isMenuOpen }) => (isMenuOpen ? "hidden" : "auto")};
  }`;

export const NavbarMenu = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.92);
  transition: 0.5s;
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
  @media (min-width: 769px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a`
  position: relative;
  color: #fff;
  font-size: 32px;
  font-family: "RobotoBold";
  padding: 20px;
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    color: #fff;
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
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
  ${(props) =>
    props.active &&
    `
      color: #17696a;
    `}
`;
