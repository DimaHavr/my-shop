import styled from "styled-components";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
export const PrevIcon = styled(HiOutlineArrowNarrowLeft)`
  width: 30px;
  height: 30px;
  color: #17696a;
`;

export const NextIcon = styled(HiOutlineArrowNarrowRight)`
  width: 30px;
  height: 30px;
  color: #17696a;
`;

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  z-index: -1;
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding-bottom: 30px;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
  margin-top: 23px;
  user-select: none;
`;

export const Subtitle = styled.h3`
  font-family: "LatoBold";
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #1e212c;
  user-select: none;
`;
