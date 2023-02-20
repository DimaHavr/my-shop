import {
  Section,
  Title,
  Wrapper,
  ProductWrapper,
  ProductsList,
  ProductsListItem,
  ProductsListLink,
  ProductsTextBox,
  ProductsTextTitle,
  ProductsText,
  ProductsImg,
  Button,
  Span,
} from "./SaleHitProductsList.styled";

const productsSaleList = [
  {
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/patrioticheskie-bodiki/detskiy-bodi-ukraina-33746348-_main-ratio-width-800-jpg.webp",
    price: "100",
    id: 1,
    label: "Option 1",
  },
  {
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/patrioticheskie-bodiki/detskiy-bodi-ukraina-33746348-_main-ratio-width-800-jpg.webp",
    price: "100",
    id: 2,
    label: "Option 2",
  },
  {
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/patrioticheskie-bodiki/detskiy-bodi-ukraina-33746348-_main-ratio-width-800-jpg.webp",
    price: "100",
    id: 3,
    label: "Option 3",
  },
  {
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/patrioticheskie-bodiki/detskiy-bodi-ukraina-33746348-_main-ratio-width-800-jpg.webp",
    price: "100",
    id: 4,
    label: "Option 4",
  },
];

const productsHitList = [
  {
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/patrioticheskie-bodiki/detskiy-bodi-ukraina-33746348-_main-ratio-width-800-jpg.webp",
    price: "100",
    id: 7,
    label: "Option 7",
  },
  {
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/patrioticheskie-bodiki/detskiy-bodi-ukraina-33746348-_main-ratio-width-800-jpg.webp",
    price: "100",
    id: 8,
    label: "Option 8",
  },
  {
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/patrioticheskie-bodiki/detskiy-bodi-ukraina-33746348-_main-ratio-width-800-jpg.webp",
    price: "100",
    id: 9,
    label: "Option 9",
  },
  {
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/patrioticheskie-bodiki/detskiy-bodi-ukraina-33746348-_main-ratio-width-800-jpg.webp",
    price: "100",
    id: 10,
    label: "Option 10",
  },
];

import React from "react";

const SaleHitProductsList = () => {
  return (
    <Section>
      <Wrapper>
        <ProductWrapper>
          <Title>Акційні пропозиції</Title>
          <ProductsList>
            {productsSaleList.map(({ id, img, label, price }) => {
              return (
                <ProductsListItem key={id}>
                  <Span>Акція</Span>
                  <ProductsListLink>
                    <ProductsImg src={img} />
                    <ProductsTextBox>
                      <ProductsText>${price}</ProductsText>
                      <ProductsTextTitle>{label}</ProductsTextTitle>
                    </ProductsTextBox>
                  </ProductsListLink>
                  <Button>Add to Cart</Button>
                </ProductsListItem>
              );
            })}
          </ProductsList>
        </ProductWrapper>
        <ProductWrapper>
          <Title>Хіти Продажу</Title>
          <ProductsList>
            {productsHitList.map(({ id, img, label, price }) => {
              return (
                <ProductsListItem key={id}>
                  <Span>Хіт продажу</Span>
                  <ProductsListLink>
                    <ProductsImg src={img} />
                    <ProductsTextBox>
                      <ProductsText>${price}</ProductsText>
                      <ProductsTextTitle>{label}</ProductsTextTitle>
                    </ProductsTextBox>
                  </ProductsListLink>
                  <Button>Add to Cart</Button>
                </ProductsListItem>
              );
            })}
          </ProductsList>
        </ProductWrapper>
      </Wrapper>
    </Section>
  );
};

export default SaleHitProductsList;
