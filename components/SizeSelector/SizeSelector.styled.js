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
  background-color: ${({ active }) => (active ? "#17696a" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#17696a")};
  box-shadow: ${({ active }) => active && "0 0 2px 2px #17696a;"};
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #17696a;
  padding: 5px;
  user-select: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #17696a;
    box-shadow: 0 0 2px 2px #17696a;
  }
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  text-align: center;
  user-select: none;
`;

export const Subtitle = styled.h4`
  font-family: "LatoLight";
  color: #424551;
  text-align: center;
`;
