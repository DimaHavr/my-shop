import styled from "styled-components";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";

export const HomeIcon = styled(AiFillHome)`
  width: 20px;
  height: 20px;
  color: #17696a;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #000;
  }
`;

export const ArrowIcon = styled(TiArrowBack)`
  width: 30px;
  height: 30px;
  color: #17696a;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #000;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 5px 130px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f4f5f7;
  width: 100%;
  @media screen and (max-width: 1080px) {
    padding: 5px 80px;
  }
  @media screen and (max-width: 768px) {
    padding: 5px 30px;
  }
`;

export const IconBox = styled.div`
  position: absolute;
  top: 50%;
  left: 13%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 20px;
  @media screen and (max-width: 375px) {
    gap: 10px;
  }
`;

export const Item = styled.li``;

export const LinkStyled = styled(Link)`
  font-family: "LatoRegular";
  color: #424551;
  text-align: center;
  user-select: none;
  text-transform: capitalize;
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #17696a;
  text-align: center;
  user-select: none;
  text-transform: capitalize;
  @media screen and (max-width: 375px) {
    padding-left: 20px;
  }
`;

export const Subtitle = styled.h4`
  font-family: "LatoBold";
  color: #424551;
  text-align: center;
`;
