import {
  Wrapper,
  Section,
  Title,
  Text,
  Button,
  NextIcon,
  PrevIcon,
} from "./TrendingNow.styled";
import ProductsCarousal from "../ProductsCarousal/ProductsCarousal";

const TrendingNow = ({ trendingProducts }) => {
  const navigationEl = {
    nextEl: ".slider-next-trends-products-btn",
    prevEl: ".slider-prev-trends-products-btn",
  };
  return (
    <Section>
      <Wrapper>
        <Title>Зараз в тренді</Title>
        <Text>
          "Must-have гардеробу: найпопулярніші речі, які зараз в тренді".
        </Text>
        <ProductsCarousal
          products={trendingProducts}
          navigationEl={navigationEl}
        >
          <button className="slider-prev-trends-products-btn">
            <PrevIcon />
          </button>
          <button className="slider-next-trends-products-btn">
            <NextIcon />
          </button>
        </ProductsCarousal>

        <Button>Ознайомтеся з топ-продажами</Button>
      </Wrapper>
    </Section>
  );
};

export default TrendingNow;
