import styled from "styled-components";
import { TiShoppingCart } from "react-icons/ti";

export const CardIcon = styled(TiShoppingCart)`
  position: absolute;
  bottom: 50px;
  right: 10px;
  cursor: pointer;
  width: 45px;
  height: 45px;
  color: green;
  z-index: 100;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: #000;
  }
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const ProductBox = styled.h2`
  position: relative;
`;

export const ProductText = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  padding: 10px;
`;

export const ProductTextItem = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  padding: 10px;
`;

export const ProductImg = styled.img`
  border-radius: 5px 5px 0px 0px;
  object-fit: cover;
  width: 280px;
  height: 280px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
`;
