import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const CloseButton = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
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
  background-color: aliceblue;
  float: right;
  padding: 40px 10px;
  position: relative;
`;

export const ImgContainer = styled.img`
  width: 200px;
`;
