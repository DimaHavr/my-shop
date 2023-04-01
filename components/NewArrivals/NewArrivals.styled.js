import styled from "styled-components";
import { Swiper } from "swiper/react";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";

export const FavoriteIcon = styled(GrFavorite)`
  width: 50px;
  height: 50px;
  color: #17696a;
  padding: 13px;
`;

export const FavoriteIconBox = styled.div`
  position: absolute;
  top: 270px;
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
  background-color: #ffffff;
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
  margin-bottom: 24px;
`;

export const List = styled(Swiper)`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const SlideBox = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 300px;
  padding: 40px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin: 23px;
  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

export const Img = styled.img``;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  margin-bottom: 8px;
  text-align: center;
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
  margin-top: 50px;
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
