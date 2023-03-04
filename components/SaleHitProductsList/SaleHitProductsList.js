import dynamic from "next/dynamic";
const Product = dynamic(() => import("../Product/Product"));

import {
  Section,
  Title,
  Wrapper,
  ProductWrapper,
  ProductsList,
  ProductsListItem,
  Span,
} from "./SaleHitProductsList.styled";

const SaleHitProductsList = ({ hitProducts }) => {
  return (
    <Section>
      <Wrapper>
        <ProductWrapper>
          <Title>Хіти Продажу</Title>
          <ProductsList>
            {hitProducts?.map((product) => (
              <ProductsListItem key={product._id}>
                <Span>Хіт продажу</Span>
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
