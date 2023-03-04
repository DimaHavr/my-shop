import styled from "styled-components";
import Link from "next/link";

export const HeroBannerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroBannerContainer = styled(Link)`
  padding: 100px 40px;
  background-color: #dcdcdc;
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-shadow: 0 0 18px rgba(0, 0, 0, 0.35);

  gap: 30px;
  p {
    font-size: 30px;
    z-index: 1;
    color: #fff;
  }

  h3 {
    font-size: 4rem;
    margin-top: 4px;
    z-index: 1;
    color: #fff;
  }
  h1 {
    color: #fff;
    font-size: 45px;
    text-transform: uppercase;
    z-index: 1;
  }
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const HeroBannerImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 450px;
  height: 450px;
  @media (max-width: 768px) {
    top: 0%;
    right: 50%;
  }
`;

export const HeroBannerImgSecond = styled.img`
  position: absolute;
  top: 7%;
  left: 0;
  width: 450px;
  height: 450px;
  @media (max-width: 768px) {
    display: none;
  }
`;
