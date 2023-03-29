import styled from "styled-components";
import { Swiper } from "swiper/react";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";

export const FavoriteIcon = styled(GrFavorite)`
  width: 36px;
  height: 36px;
  color: #787a80;
  padding: 8px;
`;

export const FavoriteIconBox = styled.div`
  position: absolute;
  top: 270px;
  right: 15px;
  cursor: pointer;

  background-color: #fff;
  border-radius: 100px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Section = styled.section`
  padding: 50px 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 1;
  justify-content: center;
  gap: 30px;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex: 1 1 1;
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 285px;
  border-radius: 8px;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const Img = styled.img`
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  margin-bottom: 8px;
`;

export const Subtitle = styled.h3`
  font-family: "LatoRegular";
  color: #424551;
  margin-bottom: 16px;
`;

export const TextPrice = styled.p`
  font-family: "LatoBold";
  font-size: 20px;
  color: #1e212c;
`;

export const TextLink = styled(Link)`
  font-family: "LatoRegular";
  text-align: center;
  text-decoration-line: underline;
  color: #17696a;
`;
