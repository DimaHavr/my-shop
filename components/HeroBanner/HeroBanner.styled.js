import styled from "styled-components";
import Link from "next/link";

export const HeroBannerSection = styled.section`
  display: flex;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat center
    center;
  height: 800px;
  background-size: cover;
  color: #fff;
  background-color: grey;
`;
export const HeroBannerContainer = styled.div`
  padding: 170px 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HeroBannerText = styled.p`
  font-family: "LatoBold";
  font-size: 18px;
  line-height: 27px;
  align-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #1e212c;
`;

export const HeroBannerTitle = styled.h1`
  font-family: "LatoBold";
  font-weight: 900;
  font-size: 72px;
  line-height: 94px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #1e212c;
`;

export const HeroBannerButton = styled.button`
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
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #fff;
    background-color: #17696a;
  }
`;
export const HeroBannerButtonSecond = styled.button`
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
