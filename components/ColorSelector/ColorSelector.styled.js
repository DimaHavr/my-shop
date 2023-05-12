import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 250px;
`;
export const List = styled.ul`
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  flex-wrap: wrap;
`;
export const Item = styled.li`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow: ${({ active }) =>
    active ? "0 0 4px 4px #17696a" : "0 0 2px 2px #00000087"};
  background-color: ${(props) => props.codeHex};
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0 0 4px 4px #17696a;
  }
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  text-align: center;
  user-select: none;
  text-transform: capitalize;
`;

export const Subtitle = styled.h4`
  font-family: "LatoLight";
  color: #424551;
  text-align: center;
`;
