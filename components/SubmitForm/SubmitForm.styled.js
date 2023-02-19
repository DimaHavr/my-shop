import styled from "styled-components";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

export const UserIcon = styled(FaUserAlt)`
  width: 23px;
  height: 23px;
  position: absolute;
  left: 10px;
  top: 36%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  z-index: 100;
  fill: #c4d600;
`;

export const CommentIcon = styled(BiCommentDots)`
  width: 23px;
  height: 23px;
  position: absolute;
  left: 10px;
  top: 36%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  z-index: 100;
  fill: #c4d600;
`;
export const ContactIcon = styled(BsFillTelephoneFill)`
  width: 23px;
  height: 23px;
  position: absolute;
  left: 10px;
  top: 36%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  z-index: 100;
  fill: #c4d600;
`;
export const EmailIcon = styled(MdOutlineMailOutline)`
  width: 27px;
  height: 27px;
  position: absolute;
  left: 10px;
  top: 36%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  z-index: 100;
  fill: #c4d600;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding: 50px;
  border-radius: 5px;
  position: relative;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  text-indent: 30px;
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: none;
  border: 2px solid #000;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #000;
    outline: 2px solid #000;
    border-radius: 5px;
  }
  @media (max-width: 480px) {
    width: 280px;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  background: #c4d600;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
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

export const CloseButton = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: #fff;
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

export const ContactsBox = styled.div`
  padding-top: 15px;
  flex-direction: column;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ContactsLink = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-decoration: none;
  color: #fff;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    text-decoration: none;
    color: #c4d600;
  }

  @media (max-width: 480px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.88;
  }
`;

export const ContactsText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-decoration: none;
  color: #fff;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);

  @media (max-width: 480px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.88;
  }
`;
