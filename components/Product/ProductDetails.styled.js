import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const MinusIcon = styled(AiOutlineMinus)`
  width: 25px;
  height: 25px;
  border: 2px solid gray;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
export const PlusIcon = styled(AiOutlinePlus)`
  width: 25px;
  height: 25px;
  border: 2px solid gray;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px 50px 50px 50px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 900;
  font-size: 34px;
  line-height: 1.36;
  text-align: start;
  letter-spacing: 0.06em;
  color: #000;
`;
export const SubTitle = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.36;
  text-align: start;
  letter-spacing: 0.06em;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.36;
  text-align: start;
  letter-spacing: 0.06em;
`;
export const TextDesc = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  text-align: start;
  letter-spacing: 0.06em;
`;

export const DetailImg = styled.img`
  min-width: 350px;
  height: 350px;
  object-fit: cover;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const SmallImage = styled.img`
  border-radius: 8px;
  background-color: #ebebeb;
  width: 70px;
  height: 70px;
  box-shadow: 13.5px 13.5px 13.5px -13.5px rgba(0, 0, 0, 0.43);
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  ${({ selected }) =>
    selected &&
    `
      background-color: #000;
      
    `}
`;

export const SmallImagesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  width: 350px;
  padding: 20px;
  cursor: grab;
`;

export const DetailDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 350px;
`;
export const QuantityText = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const AddToCartBtn = styled.button`
  width: 200px;
  outline: 1px solid #000;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 500;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #000;
    outline: none;
  }
`;

export const BuyNowBtn = styled.button`
  width: 200px;
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  outline: 1px solid #000;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #000;
    background-color: #fff;
  }
`;
