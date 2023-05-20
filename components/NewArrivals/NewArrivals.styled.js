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

export const Section = styled.section`
  background-color: #fff;
  padding: 50px 0;
  cursor: grab;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 25px;
`;
export const Title = styled.h2`
  font-family: "LatoBold";
  font-weight: 900;
  font-size: 46px;
  line-height: 60px;
  color: #1e212c;
  text-align: center;
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  text-align: center;
`;
export const Button = styled.button`
  font-family: "LatoBold";
  font-size: 16px;
  line-height: 52px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #fff;
  padding: 0px 40px;
  gap: 10px;
  height: 52px;
  border: 1px solid #17696a;
  border-radius: 4px;
  background: #17696a;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #17696a;
    background: none;
  }
`;
