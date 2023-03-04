import dynamic from "next/dynamic";
const Product = dynamic(() => import("../Product/Product"));

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

const SaleHitProductsList = ({ products }) => {
  return (
    <Section>
      <Wrapper>
        <ProductWrapper>
          <Title>Хіти Продажу</Title>
          <ProductsList>
            {products?.map((product) => (
              <ProductsListItem key={product._id}>
                <Product key={product._id} product={product} />
              </ProductsListItem>
            ))}
          </ProductsList>
        </ProductWrapper>
      </Wrapper>
    </Section>
  );
};

export default SaleHitProductsList;
