import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";

export const CloseIcon = styled(TfiClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  fill: #000;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  @media screen and (max-width: 480px) {
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
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

export const CheckoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation: fade-in-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  padding: 25px 130px;
  @keyframes fade-in-right {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1280px) {
    padding: 25px 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 15px 30px;
  }
  @media screen and (max-width: 480px) {
    padding: 15px 15px;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  @media screen and (min-width: 1368px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  width: 120px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 375px) {
    width: 80px;
  }
`;
export const Img = styled.img`
  width: 120px;
  height: auto;
  object-fit: content;
  object-position: center;
  border-radius: 8px;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 375px) {
    width: 80px;
  }
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
  @media screen and (max-width: 375px) {
    padding: 5px;
  }
`;
export const QuantityText = styled.p`
  font-size: 20px;
  font-weight: 700;
  user-select: none;
`;

export const List = styled.ul`
  width: 100%;
  max-height: 383px;
  overflow-y: auto;
  border: 1px solid #e5e8ed;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0 20px;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 15px 30px;
  @media screen and (max-width: 610px) {
    flex-direction: column;
    padding: 15px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e5e8ed;
  }
`;

export const SubTitle = styled.h3`
  cursor: pointer;
  text-align: start;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.06em;
  color: #000;
`;

export const Text = styled.p`
  font-family: "LatoBold";
  font-size: 16px;
  line-height: 26px;
  color: #1e212c;
  user-select: none;
`;

export const TextItem = styled.p`
  font-family: "LatoLight";
  color: #424551;
  text-align: center;
`;

export const RemoveBtn = styled.button`
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
  user-select: none;
  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const SummaryOrderBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  padding: 30px;
  gap: 10px;
`;
export const SummaryOrderItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e5e8ed;
`;

export const THead = styled.thead`
  border: 1px solid #e5e8ed;
`;

export const Th = styled.th`
  text-align: left;
  padding: 5px;
  border: 1px solid #e5e8ed;
`;

export const Td = styled.td`
  padding: 0.5rem;
  border: 1px solid #e5e8ed;
`;
export const SummaryBtn = styled.button`
  font-family: "LatoBold";
  font-size: 26px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #17696a;
  padding: 10px 20px;
  gap: 10px;
  border: 1px solid #17696a;
  border-radius: 4px;
  background-color: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;
export const Overlay = styled.div`
  position: fixed;
  overflow-y: scroll;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.92);
  animation: ${({ showSummaryForm }) =>
    showSummaryForm &&
    "slide-in-fwd-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"};

  @keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }

  @keyframes swing-out-top-bck {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
    100% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
  }
`;
export const SummaryOrderWrapper = styled.div`
  border-radius: 8px;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
`;
