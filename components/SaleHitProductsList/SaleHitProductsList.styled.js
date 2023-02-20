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
  color: #fff;
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
  gap: 20px;
`;

export const ProductsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const ProductsListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 280px;
  padding-bottom: 10px;
  box-shadow: 13.5px 13.5px 13.5px -13.5px rgba(0, 0, 0, 0.43);
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const ProductsListLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ProductsTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ProductsTextTitle = styled.h3`
  color: #fff;
`;

export const ProductsText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
export const ProductsImg = styled.img`
  border-radius: 5px 5px 0px 0px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: #ffff00;
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  background-color: red;
  padding: 5px 10px;
  z-index: 2;
  color: #fff;
`;
