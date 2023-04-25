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

export const ColorSelectorStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 250px;
`;

export const ColorButton = styled.button`
  margin: 10px;
  padding: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow: ${({ active }) =>
    active ? "0 0 4px 4px #17696a" : "0 0 2px 2px #00000087"};
  background-color: ${(props) => props.codeHex};
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0 0 4px 4px #17696a;
  }
`;

export const SlideBox = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
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
  text-transform: capitalize;
`;

export const Subtitle = styled.h4`
  font-family: "LatoLight";
  color: #424551;
  text-align: center;
`;
