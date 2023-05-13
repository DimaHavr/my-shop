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
  background-color: #e5e8ed;
  padding: 20px 0;
  cursor: grab;
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100;
`;
export const Title = styled.h2`
  font-family: "LatoBold";
  font-weight: 900;
  font-size: 46px;
  line-height: 60px;
  color: #1e212c;
  text-align: center;
  margin-bottom: 10px;
`;
