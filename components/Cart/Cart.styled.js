import styled from "styled-components";
import {
  AiOutlineCloseCircle,
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillDelete,
} from "react-icons/ai";
import { RxDoubleArrowLeft } from "react-icons/rx";

export const RemoveButtonIcon = styled(AiFillDelete)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  fill: #000;
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

export const CloseButton = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
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
  animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @keyframes fade-in-right {
    0% {
      -webkit-transform: translateX(350px);
      transform: translateX(350px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const CartContainer = styled.div`
  height: 100vh;
  width: 600px;
  background-color: #dbdbdb;
  float: right;
  padding: 40px 10px;
  border-left: 3px solid #000;
  overflow: overlay;
  position: relative;
`;

export const ImgContainer = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 13.5px 13.5px 13.5px -13.5px rgba(0, 0, 0, 0.43);
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
  color: #eee;
  background-color: #f02d34;
  padding: 5px 10px;
  border-radius: 50%;
  text-align: center;
  font-weight: 600;
`;

export const QuantityContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const QuantityText = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const DetailContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  border: 2px solid #000;
  margin: 20px;
  box-shadow: 13.5px 13.5px 13.5px -13.5px rgba(0, 0, 0, 0.43);
  justify-content: space-between;
`;

export const SubTitle = styled.h3`
  text-align: start;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.06em;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.36;
  letter-spacing: 0.06em;
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
  border: 2px solid #000;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 500;
  background-color: #00bc52;
  color: #fff;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #00bc52;
    border: 2px solid #000;
    transform: scale(1.02);
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #00a0461a;
  border: 1px solid #00a046;
  border: 2px solid #000;
  margin: 20px;
  margin-top: 30px;
  box-shadow: 13.5px 13.5px 13.5px -13.5px rgba(0, 0, 0, 0.43);
`;

export const BackBtn = styled.button`
  border: 2px solid #000;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 500;
  background: none;
  color: #000;
  cursor: pointer;
  transition: transform 0.5s ease;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
