import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { GrPowerReset } from "react-icons/gr";

export const ResetIcon = styled(GrPowerReset)`
  cursor: pointer;
  width: 34px;
  height: 34px;
  margin-top: 10px;
  fill: #000;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
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
export const SearchIcon = styled(BsSearch)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 37%;
  right: 0;
  transform: translate(-50%, -50%);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #17696a;
  }
`;
export const NumberIcon = styled(AiOutlineFieldNumber)`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 10px;
  fill: #00000042;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  fill: darkslategrey;
`;
export const MapIcon = styled(FaMapMarkerAlt)`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 10px;
  fill: #00000042;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  fill: darkslategrey;
`;

export const BiMapIcon = styled(BiMap)`
  width: 25px;
  height: 25px;
  fill: #eb432e;
`;

export const Title = styled.h2`
  color: #000;
  animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  @keyframes tracking-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px);
      transform: translateZ(-700px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

export const DeliveryBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const DeliveryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 20px;
  width: 500px;
  gap: 40px;
  @media screen and (max-width: 1100px) {
    width: 450px;
  }
  @media screen and (max-width: 1000px) {
    width: 400px;
  }
  @media screen and (max-width: 900px) {
    width: 380px;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.92);
  animation: ${({ showForm }) =>
    showForm
      ? "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both"
      : "swing-out-top-bck 0.45s cubic-bezier(0.600, -0.280, 0.735, 0.045) both"};

  @keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
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

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 20px;
  width: 500px;
  gap: 10px;
  @media screen and (max-width: 1100px) {
    width: 450px;
  }
  @media screen and (max-width: 1000px) {
    width: 400px;
  }
  @media screen and (max-width: 900px) {
    width: 380px;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;
export const Form = styled.form`
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
`;
export const FilterBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  color: #000;
`;
export const FormInput = styled.input`
  text-indent: 10px;
  width: 280px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #000;
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`;
export const TextArea = styled.textarea`
  text-indent: 10px;
  width: 280px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #000;
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const FilterInput = styled.input`
  display: flex;
  gap: 5px;
  text-indent: 30px;
  width: 280px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #000;
  @media screen and (max-width: 480px) {
    width: 250px;
  }
  /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-radius 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #000;
    outline: 2px solid #000;
  } */
`;

export const FilterText = styled.h3`
  color: #f23c32;
`;

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const Item = styled.li`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.075);
  backdrop-filter: blur(20px);
  animation: ${({ active }) =>
    active
      ? "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both"
      : "swing-out-top-bck 0.45s cubic-bezier(0.600, -0.280, 0.735, 0.045) both"};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #eb432e;
  }

  @keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
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
export const Text = styled.p`
  display: flex;
  gap: 5px;
  align-items: center;
  text-align: start;
`;

export const TextItem = styled.span`
  color: #000;
`;
export const LoaderStyled = styled.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #17696a;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const FilterButton = styled.button`
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

export const Select = styled.select`
  position: absolute;
  top: 48px;
  left: 0;
  width: 280px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #000;
  animation: ${({ active }) =>
    active
      ? "fade-in-right 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;"
      : "fade-out-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"};
  @media screen and (max-width: 480px) {
    width: 250px;
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

export const Option = styled.option`
  width: 280px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 2px solid #000;
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
export const ModalBtn = styled.button`
  font-family: "LatoBold";
  font-size: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #17696a;
  padding: 0px 40px;
  gap: 10px;
  height: 52px;
  border: 2px solid #17696a;
  border-radius: 4px;
  background-color: #fff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;
