import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { RiDeleteBin4Line } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";

export const RemoveButtonIcon = styled(RiDeleteBin4Line)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  fill: #787a80;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.03);
    fill: red;
  }

  @keyframes btn-animation {
    0% {
      transform: scale(1.05);
    }
    20% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.13);
    }
  }
  :active {
    animation: btn-animation 1s ease-out;
  }
`;

export const CheckoutIcon = styled(FaCreditCard)`
  width: 25px;
  height: 25px;
  fill: #fff;
  margin-right: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const MinusIcon = styled(AiOutlineMinus)`
  width: 25px;
  height: 25px;
  border: 2px solid 17696a;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
export const PlusIcon = styled(AiOutlinePlus)`
  width: 25px;
  height: 25px;
  border: 2px solid 17696a;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const CloseIcon = styled(VscChromeClose)`
  width: 30px;
  height: 30px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: #17696a;
  &:hover,
  &:focus {
    transform: scale(1.03);
    fill: #000;
  }

  @keyframes btn-animation {
    0% {
      transform: scale(1.05);
    }
    20% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.13);
    }
  }
  :active {
    animation: btn-animation 1s ease-out;
  }
`;

export const CartWrapper = styled.div`
  width: 100vw;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  animation: ${({ showCart }) =>
    showCart
      ? "fade-in-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;"
      : "fade-out-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"};

  @media screen and (max-width: 480px) {
    width: 100vw;
  }
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

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 352px;
  background: #ffffff;
  border: 1px solid #e5e8ed;
  box-shadow: 0px 60px 80px -20px rgba(30, 33, 44, 0.16),
    0px 26px 24px -10px rgba(30, 33, 44, 0.1),
    0px 12px 10px -6px rgba(30, 33, 44, 0.08),
    0px 4px 4px -4px rgba(30, 33, 44, 0.05);
  border-radius: 4px 0px 0px 4px;
  float: right;
  animation: ${({ showCart }) =>
    showCart
      ? "fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;"
      : "fade-out-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"};

  @media screen and (max-width: 480px) {
    width: 100vw;
  }
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

export const EmptyCartBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media screen and (max-width: 480px) {
    width: 100vw;
  }
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

export const ImgContainer = styled.div`
  width: 80px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 80px;
  height: auto;
  object-fit: content;
  object-position: center;
`;

export const BackButton = styled.button`
  cursor: pointer;

  background: none;
  border: none;
`;

export const Span = styled.span`
  font-size: 12px;
  color: #fff;
  background-color: #17696a;
  padding: 5px 10px;
  border-radius: 50%;
  text-align: center;
  font-weight: 600;
  margin-left: 10px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  padding: 10px;
  border: 1px solid #d7dadd;
  border-radius: 4px;
  padding-right: 20px;
`;
export const QuantityText = styled.p`
  font-size: 20px;
  font-weight: 700;
  user-select: none;
`;

export const List = styled.ul`
  overflow-y: scroll;
  max-height: 71vh;
  @media screen and (max-width: 480px) {
    max-height: 60vh;
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  border-top: 1px solid #e5e8ed;
  padding: 16px;
`;

export const SubTitle = styled.h3`
  cursor: pointer;
  text-align: start;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.06em;
  color: #000;
  width: 168px;
`;

export const Text = styled.p`
  font-family: "LatoBold";
  font-size: 16px;
  line-height: 26px;
  color: #1e212c;
  user-select: none;
`;
export const TextDesc = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  text-align: start;
  letter-spacing: 0.06em;
`;

export const TextItem = styled.p`
  font-family: "LatoLight";
  color: #424551;
  text-align: center;
`;

export const IssueBtn = styled.button`
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

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top: 1px solid #e5e8ed;
  gap: 20px;
  padding: 16px 16px 26px;
  @media screen and (max-width: 480px) {
    padding-bottom: 20vh;
  }
`;

export const BackBtn = styled.button`
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

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;
