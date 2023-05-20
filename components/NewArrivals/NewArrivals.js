import {
  Wrapper,
  Section,
  Title,
  Text,
  Button,
  NextIcon,
  PrevIcon,
} from "./NewArrivals.styled";
import ProductsCarousal from "../ProductsCarousal/ProductsCarousal";

const NewArrivals = ({ newProducts }) => {
  const navigationEl = {
    nextEl: ".slider-next-new-products-btn",
    prevEl: ".slider-prev-new-products-btn",
  };
  return (
    <Section>
      <Wrapper>
        <Title>Нові надходження</Title>
        <Text>
          "Ознайомтеся з нашими останніми надходженнями на наступний сезон"
        </Text>
        <ProductsCarousal products={newProducts} navigationEl={navigationEl}>
          <button className="slider-prev-new-products-btn">
            <PrevIcon />
          </button>
          <button className="slider-next-new-products-btn">
            <NextIcon />
          </button>
        </ProductsCarousal>

        {/* <Button>Дивіться колекцію тут</Button> */}
      </Wrapper>
    </Section>
  );
};

export default NewArrivals;
