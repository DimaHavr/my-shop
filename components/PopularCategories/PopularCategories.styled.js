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
  padding: 50px 0;
`;

export const Title = styled.h2`
  font-family: "LatoBold";
  font-weight: 900;
  font-size: 46px;
  line-height: 60px;
  color: #1e212c;
  text-align: center;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const Img = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
  margin-top: 23px;
`;

export const Subtitle = styled.h3`
  font-family: "LatoBold";
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  user-select: none;
  color: #1e212c;
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  margin-bottom: 8px;
  text-align: center;
`;
