import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PrevIcon = styled(FaChevronLeft)`
  width: 20px;
  height: 20px;
  color: #17696a;
`;

export const NextIcon = styled(FaChevronRight)`
  width: 20px;
  height: 20px;
  color: #17696a;
`;

export const SizeSelectorStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 250px;
`;

export const SizeButton = styled.button`
  background-color: ${({ active }) => (active ? "#17696a" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#17696a")};
  box-shadow: ${({ active }) => active && "0 0 2px 2px #17696a;"};
  margin: 5px;
  padding: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  user-select: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #17696a;
    box-shadow: 0 0 2px 2px #17696a;
  }
`;
export const SlideBox = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  box-shadow: inset 0.5px -0.5px 32px -0.5px #ffffff;
`;

export const PrevBtn = styled.button`
  position: absolute;
  border: none;
  background: none;
  left: 7px;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
`;

export const NextBtn = styled.button`
  position: absolute;
  border: none;
  background: none;
  right: -26px;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    right: -50px;
  }
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  text-align: center;
  user-select: none;
`;

export const Subtitle = styled.h4`
  font-family: "LatoLight";
  color: #424551;
  text-align: center;
`;
