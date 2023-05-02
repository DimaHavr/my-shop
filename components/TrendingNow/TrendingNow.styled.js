import styled from "styled-components";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

export const FavoriteIcon = styled(MdOutlineFavoriteBorder)`
  width: 50px;
  height: 50px;
  color: #17696a;
  padding: 13px;
`;

export const FavoriteIconRemove = styled(MdFavorite)`
  width: 50px;
  height: 50px;
  color: #17696a;
  padding: 13px;
`;

export const FavoriteIconBox = styled.div`
  position: absolute;
  bottom: 60px;
  right: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  background-color: #ffffffb8;
  border-radius: 100px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Section = styled.section`
  background-color: #e5e8ed;
  padding: 50px 0;
  cursor: grab;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100;
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

export const SlideBox = styled.div`
  background-color: #e5e8ed;
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-radius: 8px;
  background-color: #fff;
  gap: 25px;
  margin: 20px 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const ImgBox = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  border-radius: 8px;
  object-fit: contain;
  object-position: center;
`;

export const Subtitle = styled.h3`
  position: absolute;
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  bottom: 0;
  left: 0;
  font-family: "LatoLight";
  width: 100%;
  color: #ffffff;
  overflow: hidden;
  padding-top: 10px;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  background-color: #17696ac2;
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

export const Button = styled.button`
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
  margin-top: 25px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #17696a;
    background: none;
  }
`;
