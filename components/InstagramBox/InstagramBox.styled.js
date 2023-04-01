import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";

export const InstagramIcon = styled(AiFillInstagram)`
  width: 23px;
  height: 23px;
  color: #fb3958;
  margin-right: 5px;
`;

export const Section = styled.section`
  background-color: #ffffff;
  padding: 100px 130px;
  @media screen and (max-width: 680px) {
    padding: 50px 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1280px) {
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  @media screen and (max-width: 960px) {
    width: 160px;
    height: 160px;
  }
  @media screen and (max-width: 580px) {
    width: 260px;
    height: 260px;
  }
`;

export const Text = styled.p`
  font-family: "LatoBold";
  font-size: 14px;
  line-height: 27px;
  align-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #1e212c;
  @media screen and (max-width: 620px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const TextItem = styled.p`
  font-family: "LatoBold";
  font-style: normal;
  font-weight: 900;
  font-size: 46px;
  line-height: 60px;
  color: #1e212c;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: #17696a;
    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: 0.4s;
  }
  &:hover::after {
    transform: scaleX(1);
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
export const Button = styled.button`
  font-family: "LatoBold";
  font-size: 16px;
  line-height: 52px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #17696a;
  padding: 0px 40px;
  gap: 10px;
  height: 52px;
  border: 1px solid #17696a;
  border-radius: 4px;
  background: none;
  margin-top: 50px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #fff;
    background-color: #17696a;
  }
  @media screen and (max-width: 1280px) {
    margin-top: 20px;
  }
`;
