import styled from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";

export const StarIcon = styled(FaStar)`
  fill: #f89828;
`;

export const RegStarIcon = styled(FaRegStar)`
  fill: #b3b7bc;
`;

export const ToggleMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-bottom: 10px;
`;

export const ToggleMenuBtnBox = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 488px) {
    justify-content: center;
  }
`;

export const ToggleMenuButton = styled.button`
  font-family: "LatoBold";
  font-size: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #000;
  padding: 10px 10px;
  gap: 10px;
  border: 1px solid #17696a;
  background-color: #fff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #17696a;
  }
  ${({ active }) => active && ` background-color: #17696a; color: #ffffff;`};
`;

export const Text = styled.p`
  font-family: "LatoBold";
  color: #17696a;
  @media screen and (max-width: 488px) {
    text-align: center;
  }
`;

export const TextDesc = styled.p`
  font-family: "LatoRegular";
  color: #000;
  @media screen and (max-width: 488px) {
    text-align: center;
  }
`;
export const TextComment = styled.p`
  font-family: "LatoLight";
  color: #000;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: ${({ active }) =>
    active
      ? "fade-in-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;"
      : "fade-out-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"};

  @keyframes fade-in-right {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-out-right {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Button = styled.button`
  width: 220px;
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
  background-color: #17696a;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 20px;
  user-select: none;
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
  @media screen and (max-width: 488px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const ItemBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
