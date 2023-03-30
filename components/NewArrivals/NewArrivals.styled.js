import styled from "styled-components";
import { Swiper } from "swiper/react";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";

export const FavoriteIcon = styled(GrFavorite)`
  width: 50px;
  height: 50px;
  color: #17696a;
  padding: 8px;
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
  padding-top: 50px;
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
  padding: 60px 50px;
  display: flex;

  @media screen and (max-width: 435) {
    padding: 50px 10px;
    margin-right: 30px;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 300px;
  padding: 40px 40px 60px 40px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
  top: 17px;
  left: 29px;
  width: 50px;
  height: 50px;
  background-color: #17696a;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
`;

export const TextLink = styled(Link)`
  font-family: "LatoRegular";
  text-align: center;
  text-decoration-line: underline;
  color: #17696a;
  text-align: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: #17696a;
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-family: "LatoRegular";
  text-align: center;
  color: #fff;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  text-transform: uppercase;
  position: absolute;
  bottom: -40px;
  right: 30px;
  background-color: #17696a;
  border: none;
  box-shadow: 0 30px 25px -20px rgba(0, 0, 0, 0.35);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
