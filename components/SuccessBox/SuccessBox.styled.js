import styled from "styled-components";
export const Overlay = styled.div`
  position: ${({ isMenuOpen }) => (isMenuOpen ? "fixed" : "relative")};

  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const SuccessBoxStyled = styled.div`
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

export const Button = styled.button`
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
