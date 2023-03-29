import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchIcon = styled(BsSearch)`
  width: 15px;
  height: 15px;
`;

export const Wrapper = styled.form`
  position: relative;
  @media screen and (max-width: 767px) {
    align-items: center;
    gap: 10px;
  }
`;

export const Input = styled.input`
  text-indent: 5px;
  width: 380px;
  height: 44;
  font-size: 16px;
  border: 1px solid #d7dadd;
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
  &::placeholder {
    font-size: 14px;
    line-height: 21px;

    color: #9a9ca5;
  }
  /* @media screen and (max-width: 767px) {
    width: 200px;
  } */
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 7px;
  cursor: pointer;
  border: none;
  background: none;
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

  @media screen and (max-width: 767px) {
    padding: 6px 16px;
  }
`;
