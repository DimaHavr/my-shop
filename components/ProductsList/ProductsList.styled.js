import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 15px 50px 15px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 900;
  font-size: 44px;
  line-height: 1.36;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #000;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ProductsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 1;
  justify-content: center;
  gap: 25px;
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

export const ProductsListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: relative;
  width: 255px;
  border-radius: 20px;
  background: #ffffff;

  padding-bottom: 10px;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgb(255, 169, 0);
  color: rgb(255, 255, 255);
  border-radius: 50px;
  padding: 10px;
  font-weight: 700;
`;
