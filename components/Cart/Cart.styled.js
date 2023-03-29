import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxDoubleArrowLeft } from "react-icons/rx";
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
  border: 2px solid gray;
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
  border: 2px solid gray;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const BackButtonIcon = styled(RxDoubleArrowLeft)`
  width: 30px;
  height: 30px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: #000;
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

export const CartWrapper = styled.div`
  width: 100vw;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  background: #1e212cd1;
`;

export const CartContainer = styled.div`
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
      -webkit-transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-out-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
    }
  }
`;

export const ImgContainer = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
`;

export const BackButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 10px;
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
`;
export const QuantityText = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const DetailContainer = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  border-top: 1px solid #e5e8ed;
  padding: 16px;
  justify-content: space-between;
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
`;
export const TextDesc = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  text-align: start;
  letter-spacing: 0.06em;
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
  padding: 16px;
  gap: 20px;
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
