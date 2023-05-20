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

export const SlideBox = styled.div`
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

export const DiscountWrapper = styled.span`
  position: absolute;
  top: -6px;
  right: -16px;
  z-index: 100;
  margin-top: 0 !important;
  padding-right: 6px;
  background: #c82128;
  white-space: nowrap;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 5px;
    left: 0;
    background: #c82128;
    transform: skewX(30deg);
    box-shadow: -10px 6px 0 0 #c82128;
    height: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    right: 5px;
    left: 0;
    bottom: 0;
    background: #c82128;
    transform: skewX(330deg);
    box-shadow: -10px -6px 0 0 #c82128;
    height: 50%;
  }
`;

export const DiscountLabel = styled.span`
  display: block;
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 5px 10px;

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    right: -6px;
    width: 0;
    height: 0;
    border: 3px solid transparent;
    border-top-color: #8e0007;
    border-left-color: #8e0007;
    border-width: 8px;
  }
`;
export const DiscountText = styled.span`
  font-weight: 700;
  color: #fff;
  font-size: 16px;
  line-height: 1;
`;

export const PriceWrapper = styled.span`
  position: absolute;
  top: -6px;
  left: -16px;
  z-index: 100;
  margin-top: 0 !important;
  padding-left: 6px;
  background: #17696a;
  display: block;
  white-space: nowrap;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 5px;
    right: 0;
    background: #17696a;
    transform: skewX(330deg);
    box-shadow: 10px 6px 0 0 #17696a;
    height: 50%;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 5px;
    right: 0;
    bottom: 0;
    background: #17696a;
    transform: skewX(30deg);
    box-shadow: 10px -6px 0 0 #17696a;
    height: 50%;
  }
`;

export const PriceLabel = styled.span`
  display: block;
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 5px 10px;

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: -6px;
    width: 0;
    height: 0;
    border: 3px solid transparent;
    border-top-color: #145152;
    border-right-color: #145152;
    border-width: 8px;
  }
`;
export const PriceText = styled.span`
  font-weight: 700;
  color: #fff;
  font-size: 16px;
  line-height: 1;
`;
