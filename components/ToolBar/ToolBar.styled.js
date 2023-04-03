import { ImEqualizer2 } from "react-icons/im";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  flex-wrap: wrap;
  @media screen and (max-width: 886px) {
    gap: 20px;
  }
`;

export const FilterButtonIcon = styled(ImEqualizer2)`
  width: 23px;
  height: 23px;
  color: #fff;
  margin-right: 5px;
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
  background: #17696a;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #17696a;
    background: none;
    ${FilterButtonIcon} {
      color: #17696a;
    }
  }
`;
