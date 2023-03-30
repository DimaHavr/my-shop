import styled from "styled-components";
import Link from "next/link";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgCopyright } from "react-icons/cg";

export const SectionFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 40px;
  margin-top: auto;
  background-color: #1e212c;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 138px;
  @media screen and (max-width: 748px) {
    gap: 70px;
  }
  @media screen and (max-width: 480px) {
    gap: 30px;
  }
`;

export const SubTitle = styled.h3`
  font-family: "LatoBold";
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 12px;
  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;
export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const LinkItem = styled(Link)`
  font-family: "LatoRegular";
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  opacity: 0.6;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
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
    color: #ffffff;
  }

  @media (max-width: 480px) {
    font-weight: 400;
    font-size: 10px;
    line-height: 1.88;
  }
`;

export const IconList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 480px) {
    gap: 15;
  }
`;
export const IconItem = styled.li`
  display: flex;
`;

export const CopyIcon = styled(CgCopyright)`
  width: 20px;
  height: 20px;
  color: #17696a;
  margin-right: 5px;
`;

export const MapIcon = styled(BiMap)`
  width: 20px;
  height: 20px;
  color: #17696a;
`;

export const ContactIcon = styled(BsFillTelephoneFill)`
  width: 20px;
  height: 20px;
  color: #17696a;
`;
export const EmailIcon = styled(MdOutlineMailOutline)`
  width: 20px;
  height: 20px;
  color: #17696a;
`;

export const InstagramIcon = styled(AiFillInstagram)`
  width: 23px;
  height: 23px;
  fill: #fb3958;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const FacebookIcon = styled(BsFacebook)`
  width: 20px;
  height: 20px;
  fill: #4267b2;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const TelegramIcon = styled(BsTelegram)`
  width: 20px;
  height: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
