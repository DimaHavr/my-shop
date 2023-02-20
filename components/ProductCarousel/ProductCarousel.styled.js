import styled from "styled-components";

export const ProductCarouselSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

export const ProductCarouselContainer = styled.div`
  width: 100%;
  object-fit: cover;
  object-position: center;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ProductCarouselImg = styled.img`
  object-fit: contain;
  cursor: pointer;
  object-fit: cover;
  /* @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 480px) {
    max-width: 280px;
  } */
`;
