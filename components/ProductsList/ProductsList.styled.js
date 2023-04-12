import styled from "styled-components";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

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
  top: 200px;
  right: 15px;
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
  padding: 30px 0 50px 0;
`;

export const Title = styled.h2`
  font-family: "LatoBold";
  font-weight: 900;
  font-size: 46px;
  line-height: 60px;
  color: #1e212c;
  text-align: center;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
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
  width: 180px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 180px;
  max-height: 200px;
  object-fit: content;
  object-position: center;
  user-select: none;
`;
export const Subtitle = styled.h3`
  font-family: "LatoLight";
  width: 220px;
  color: #000;
  padding-top: 20px;
  font-size: 18px;
  line-height: 24px;
  flex-grow: 1;
  text-align: center;
  user-select: none;
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  margin-bottom: 8px;
  text-align: center;
`;

export const TextPrice = styled.p`
  text-align: center;
  font-family: "LatoBold";
  font-size: 20px;
  color: #fff;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  padding: 6px;
  background-color: #17696a;
  color: #fff;
  border-radius: 8px 0 8px 0;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
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
