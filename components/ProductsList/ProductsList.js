import dynamic from "next/dynamic";
const Product = dynamic(() => import("../Product/Product"));
import Router from "next/router";

import {
  Section,
  Wrapper,
  ProductWrapper,
  ProductsListStyled,
  ProductsListItem,
} from "./ProductsList.styled";

const ProductsList = ({ products }) => {
  return (
    <Section>
      <Wrapper>
        <ProductWrapper>
          <ProductsListStyled>
            {products?.map((product) => (
              <ProductsListItem key={product._id}>
                <Product key={product._id} product={product} />
              </ProductsListItem>
            ))}
          </ProductsListStyled>
        </ProductWrapper>
      </Wrapper>
    </Section>
  );
};

export default ProductsList;
