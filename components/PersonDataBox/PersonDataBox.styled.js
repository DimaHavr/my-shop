import styled from "styled-components";
import { GrPowerReset } from "react-icons/gr";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

export const NameIcon = styled(MdDriveFileRenameOutline)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  fill: #17696a;
  position: absolute;
  top: 0;
  left: 5px;
`;
export const PhoneIcon = styled(FaPhoneSquareAlt)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  fill: #17696a;
  position: absolute;
  top: 0;
  left: 5px;
`;
export const EmailIcon = styled(MdEmail)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  fill: #17696a;
  position: absolute;
  top: 0;
  left: 5px;
`;
export const ResetIcon = styled(GrPowerReset)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  fill: #17696a;
  position: absolute;
  top: 0;
  left: 5px;
`;
export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  position: relative;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const FormInput = styled.input`
  text-indent: 30px;
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

export const FormBtn = styled.button`
  font-family: "LatoBold";
  font-size: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #fff;
  padding: 0px 40px;
  gap: 10px;
  height: 52px;
  border: 2px solid #17696a;
  border-radius: 4px;
  background-color: #17696a;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;
export const InputContainer = styled.div`
  position: relative;
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
