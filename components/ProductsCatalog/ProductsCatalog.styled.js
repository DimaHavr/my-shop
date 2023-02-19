import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

export const CategoryWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px 15px 20px 15px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const StyledDropdown = styled(Dropdown)``;

export const StyledToggle = styled(Dropdown.Toggle)`
  color: #333;
  font-weight: 700;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.04);
  }

  &::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
`;

export const StyledMenu = styled(Dropdown.Menu)`
  background-color: #f2f2f2;
  border: none;
  animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  margin-top: 50px;
  padding: 5px;

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
      transform: rotateX(-10deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
`;

export const StyledItem = styled(Dropdown.Item)`
  color: #333;
  font-weight: 700;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.04);
    color: #ffff00;
    background: #333;
  }
`;
