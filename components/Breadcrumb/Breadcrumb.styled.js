import styled from "styled-components";
import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { MdArrowForwardIos } from "react-icons/md";

export const HomeIcon = styled(GrHomeRounded)`
  width: 20px;
  height: 20px;
  color: #17696a;
`;

export const ArrowIcon = styled(MdArrowForwardIos)`
  width: 20px;
  height: 20px;
  color: #17696a;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 130px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  box-shadow: inset -0.5px 0px 13.5px -6px rgba(0, 0, 0, 0.43);
  @media screen and (max-width: 1080px) {
    padding: 5px 80px;
  }
  @media screen and (max-width: 768px) {
    padding: 5px 30px;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
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
