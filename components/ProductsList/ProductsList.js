import dynamic from "next/dynamic";
const Product = dynamic(() => import("../Product/Product"));

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
                <Product product={product} />
              </ProductsListItem>
            ))}
          </ProductsListStyled>
        </ProductWrapper>
      </Wrapper>
    </Section>
  );
};

export default ProductsList;
