import styled from "styled-components";

export const ToggleMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ToggleMenuBtnBox = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 488px) {
    justify-content: center;
  }
`;

export const ToggleMenuButton = styled.button`
  font-family: "LatoBold";
  font-size: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #000;
  padding: 10px 10px;
  gap: 10px;
  border: 1px solid #17696a;
  background-color: #fff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #17696a;
  }
  ${({ active }) => active && ` background-color: #17696a; color: #ffffff;`};
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #000;
  @media screen and (max-width: 488px) {
    text-align: center;
  }
`;

export const ContentBox = styled.p`
  width: 500px;
  animation: ${({ active }) =>
    active
      ? "fade-in-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;"
      : "fade-out-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"};

  @media screen and (max-width: 1150px) {
    max-width: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
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
