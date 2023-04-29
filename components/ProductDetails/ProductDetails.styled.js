import styled from "styled-components";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const MinusIcon = styled(AiOutlineMinus)`
  width: 25px;
  height: 25px;
  border: 2px solid 17696a;
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
  border: 2px solid 17696a;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const FavoriteIcon = styled(MdOutlineFavoriteBorder)`
  width: 40px;
  height: 40px;
  color: #17696a;
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(-50%, -50%);
`;

export const FavoriteIconRemove = styled(MdFavorite)`
  width: 40px;
  height: 40px;
  color: #17696a;
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(-50%, -50%);
`;

export const FavoriteIconBox = styled.div`
  cursor: pointer;
  position: relative;
  width: 300px;
  font-family: "LatoBold";
  font-size: 16px;
  line-height: 52px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #17696a;
  padding: 0px 40px;
  gap: 10px;
  border: 1px solid #17696a;
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
  @media screen and (max-width: 488px) {
    width: 100%;
  }
`;

export const Section = styled.section`
  padding: 20px 130px 50px 130px;
  @media screen and (max-width: 1150px) {
    padding: 20px 50px 50px 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const Title = styled.h2`
  font-family: "LatoBold";
  font-weight: 900;
  font-size: 26px;
  line-height: 40px;
  color: #424551;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 25px;
  align-items: center;
  position: relative;
  @media screen and (max-width: 930px) {
    flex-direction: column-reverse;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Subtitle = styled.h4`
  font-family: "LatoLight";
  color: #424551;
  text-align: center;
`;

export const DescText = styled.p`
  font-family: "LatoLight";
  color: #000;
  font-size: 18px;
  line-height: 24px;
  max-width: 500px;
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  text-align: center;
`;

export const TextPrice = styled.p`
  font-family: "LatoBold";
  font-size: 20px;
  color: #17696a;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 488px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const AddBtn = styled.button`
  width: 220px;
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
  background-color: #17696a;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
  @media screen and (max-width: 488px) {
    width: 100%;
  }
`;

export const RemoveBtn = styled.button`
  width: 220px;
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
  border: 1px solid #c01313;
  border-radius: 4px;
  background-color: #c01313;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
  @media screen and (max-width: 488px) {
    width: 100%;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  padding: 10px;
  border: 1px solid #d7dadd;
  border-radius: 4px;
  padding-right: 20px;
  @media screen and (max-width: 488px) {
  }
`;

export const QuantityText = styled.p`
  font-size: 20px;
  font-weight: 700;
  user-select: none;
`;
export const QuantityBtn = styled.button`
  border: none;
  background: none;
  user-select: none;
`;
