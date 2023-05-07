import styled from "styled-components";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import Image from "next/image";
export const FavoriteIcon = styled(MdOutlineFavoriteBorder)`
  width: 50px;
  height: 50px;
  color: #17696a;
  padding: 10px;
`;

export const FavoriteIconRemove = styled(MdFavorite)`
  width: 50px;
  height: 50px;
  color: #17696a;
  padding: 10px;
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
  animation: ${({ active }) =>
    active
      ? "fade-in-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;"
      : "fade-out-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;"};

  @keyframes fade-in-right {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-out-right {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
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
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 250px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  gap: 25px;
  margin: 23px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
export const ImgEmpty = styled.img`
  width: 300px;
`;
export const TextEmpty = styled.p`
  font-family: "LatoBold";
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;
export const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
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
