import {
  Section,
  Wrapper,
  Title,
  NextIcon,
  PrevIcon,
} from "./RecommendedProducts.styled";
import ProductsCarousal from "../ProductsCarousal/ProductsCarousal";

const RecommendedProducts = ({ recommendProducts }) => {
  const navigationEl = {
    nextEl: ".slider-next-recommend-products-btn",
    prevEl: ".slider-prev-recommend-products-btn",
  };
  return (
    <Section>
      <Wrapper>
        <Title>Рекомендуємо з цієї категорії</Title>
        <ProductsCarousal
          products={recommendProducts}
          navigationEl={navigationEl}
        >
          <button className="slider-prev-recommend-products-btn">
            <PrevIcon />
          </button>
          <button className="slider-next-recommend-products-btn">
            <NextIcon />
          </button>
        </ProductsCarousal>
      </Wrapper>
    </Section>
  );
};

export default RecommendedProducts;
