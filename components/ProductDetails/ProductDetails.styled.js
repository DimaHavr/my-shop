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
    transform: scale(1.05);
  }
`;

export const FavoriteIcon = styled(MdOutlineFavoriteBorder)`
  width: 40px;
  height: 40px;
  color: #17696a;
  padding: 7px;
`;

export const FavoriteIconRemove = styled(MdFavorite)`
  width: 40px;
  height: 40px;
  color: #17696a;
  padding: 7px;
`;

export const FavoriteIconBox = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  cursor: pointer;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-radius: 100px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Section = styled.section`
  padding: 50px 130px;
  @media screen and (max-width: 680px) {
    padding: 50px 50px;
  }
`;

export const Title = styled.h2`
  font-family: "LatoBold";
  font-weight: 900;
  font-size: 26px;
  line-height: 40px;

  color: #1e212c;
  text-align: center;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 30px;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const Item = styled.li`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  gap: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const ImgBox = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Img = styled.img`
  width: 300px;
  height: auto;
  object-fit: content;
  object-position: center;
  user-select: none;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DescText = styled.p`
  font-family: "LatoLight";
  color: #000;
  padding-top: 20px;
  font-size: 18px;
  line-height: 24px;
  max-width: 500px;
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  margin-bottom: 8px;
  text-align: center;
`;

export const TextPrice = styled.p`
  font-family: "LatoBold";
  font-size: 20px;
  color: #17696a;
`;

export const AddBtn = styled.button`
  width: 100%;
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
    transform: scale(1.01);
  }
`;

export const RemoveBtn = styled.button`
  width: 100%;
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
    transform: scale(1.01);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  padding: 10px;
  border: 1px solid #d7dadd;
  border-radius: 4px;
  padding-right: 20px;
`;
export const QuantityText = styled.p`
  font-size: 20px;
  font-weight: 700;
  user-select: none;
`;
