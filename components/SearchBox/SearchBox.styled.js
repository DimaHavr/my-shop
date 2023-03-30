import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchIcon = styled(BsSearch)`
  width: 20px;
  height: 20px;
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
  width: 100%;
  width: 280px;
  height: 44;
  font-size: 16px;
  border: 1px solid #d7dadd;
  border-radius: 4px;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
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
  @media screen and (max-width: 1280px) {
    width: 200px;
  }
  @media screen and (max-width: 980px) {
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    position: absolute;
    top: 44px;
    left: -13px;
    text-indent: 5px;
    z-index: 2;
    width: 200px;
    height: 42px;
    font-size: 16px;
    border: 1px solid #d7dadd;
    border-radius: 4px;
    box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      outline 250ms cubic-bezier(0.4, 0, 0.2, 1),
      visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${({ isOpen }) =>
      isOpen
        ? "animation: fadeIn 250ms cubic-bezier(0.4, 0, 0.2, 1);"
        : "fadeOut 250ms cubic-bezier(0.4, 0, 0.2, 1);"};

    &:hover,
    &:focus {
      transform: scale(1.01);
    }
    &::placeholder {
      font-size: 14px;
      line-height: 21px;

      color: #9a9ca5;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
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

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const ToggleDropbox = styled.button`
  display: none;

  @media screen and (max-width: 980px) {
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

    @media screen and (max-width: 980px) {
      display: flex;
    }
  }
`;
