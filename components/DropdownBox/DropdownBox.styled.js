import styled from "styled-components";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export const DropBoxIcon = styled(IoIosArrowDropdownCircle)`
  cursor: pointer;
  width: 15px;
  height: 15px;
  color: #fff;
`;

export const DropdownSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px 20px 15px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #333;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
`;

export const DropdownButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  border: none;
  box-shadow: inset -0.5px -10.5px 13.5px -6px rgba(0, 0, 0, 0.43);
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  :active {
    color: inherit;
    background-color: #141414;
  }
`;

export const DropdownMenu = styled.div`
  width: 100%;
  position: absolute;
  top: 100%;
  z-index: 1000;
  background-color: #333;
  box-shadow: inset -0.5px -10.5px 13.5px -6px rgba(0, 0, 0, 0.43);
  animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  @keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(-10deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
`;

export const DropdownItem = styled.a`
  display: block;
  color: #fff;
  color: inherit;
  padding: 5px 10px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: inherit;
    background-color: #141414;
  }
`;
