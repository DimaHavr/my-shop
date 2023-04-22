import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PrevIcon = styled(FaChevronLeft)`
  width: 30px;
  height: 30px;
  color: #17696a;
`;

export const NextIcon = styled(FaChevronRight)`
  width: 30px;
  height: 30px;
  color: #17696a;
`;

export const ImgSlideBoxStyled = styled.div`
  position: relative;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  height: 500px;

  @media screen and (max-width: 930px) {
    flex-direction: row;
    width: 300px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    width: 460px;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;

export const SlideBox = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100%;
  cursor: grab;
  @media screen and (max-width: 930px) {
    width: 100%;
  }
`;

export const PrevBtn = styled.button`
  position: absolute;
  border: none;
  background: none;
  left: 50%;
  top: 10px;
  transform: translate(-50%, -50%) rotate(90deg);
  z-index: 1;
  cursor: pointer;
  background-color: #ffffff9e;
  border-radius: 100%;
  padding: 10px;
  @media screen and (max-width: 930px) {
    left: 10px;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  @media screen and (max-width: 768px) {
    left: 10px;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  @media screen and (max-width: 480px) {
    left: 10px;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

export const NextBtn = styled.button`
  position: absolute;
  border: none;
  background: none;
  left: 50%;
  top: 480px;
  transform: translate(-50%, -50%) rotate(90deg);
  z-index: 1;
  cursor: pointer;
  background-color: #ffffff9e;
  border-radius: 100%;
  padding: 10px;
  @media screen and (max-width: 930px) {
    left: 290px;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  @media screen and (max-width: 768px) {
    left: 450px;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  @media screen and (max-width: 480px) {
    left: 290px;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;
export const ImgSmall = styled.img`
  object-fit: content;
  object-position: center;
  user-select: none;
  width: 120px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Img = styled.img`
  max-width: 400px;
  max-height: 600px;
  object-fit: content;
  object-position: center;
  user-select: none;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  @media screen and (max-width: 1100px) {
    max-width: 100%;
    max-height: 400px;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
    max-height: auto;
  }

  animation: ${({ showImage }) =>
    showImage &&
    "fade-in-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;"};

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
