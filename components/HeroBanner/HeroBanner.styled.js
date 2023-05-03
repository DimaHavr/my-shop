import styled from "styled-components";

export const HeroBannerSection = styled.section`
  display: flex;
  justify-content: center;
  background: linear-gradient(rgba(47, 48, 58, 0.2), rgba(47, 48, 58, 0.2)),
    url(${({ backgroundImage }) => backgroundImage}) no-repeat center center;
  height: 680px;
  background-size: cover;
  color: #fff;
  background-color: grey;
  background-position-y: 75%;
  animation: ${({ backgroundImage }) =>
    backgroundImage
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
  @media screen and (max-width: 1100px) {
    height: 480px;
  }
  @media screen and (max-width: 768px) {
    height: 450px;
    justify-content: flex-start;
  }
  @media screen and (max-width: 620px) {
    background-position-x: 27%;
  }
`;

export const HeroBannerContainer = styled.div`
  padding: 0 30px;
  padding-top: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 1100px) {
    padding-top: 200px;
  }
  @media screen and (max-width: 900px) {
    padding-top: 200px;
  }
  @media screen and (max-width: 810px) {
    padding-top: 200px;
    padding-left: 20px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 50px;
    padding-left: 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 30px;
  }
`;

export const HeroBannerText = styled.p`
  font-family: "LatoBold";
  font-size: 14px;
  line-height: 27px;
  align-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #1e212c;
  -webkit-animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @media screen and (max-width: 620px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const HeroBannerTitle = styled.h1`
  font-family: "LatoBold";
  font-weight: 900;
  font-size: 42px;
  line-height: 64px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  color: #fff;
  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 44px;
    width: 200px;
  }
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
  -webkit-animation: text-focus-in 1.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: text-focus-in 1.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

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
  -webkit-animation: text-focus-in 1.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: text-focus-in 1.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #17696a;
    background: none;
  }
`;

export const HeroBannerButtonBox = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 15px;
  @media screen and (max-width: 620px) {
    flex-direction: column;
    margin-top: 15px;
  }
`;
