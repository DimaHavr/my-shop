const trendingNow = [
  {
    id: "1",
    img: "/images/newArrivals/babyShoes.webp",
    subtitle: "Baby shoes with",
    price: 100,
  },
  {
    id: "2",
    img: "/images/newArrivals/redDangleEarrings.webp",
    subtitle: "Red dangle earrings",
    price: 100,
  },
  {
    id: "3",
    img: "/images/newArrivals/jeans.webp",
    subtitle: "Mid-rise slim cropped fit jeans",
    price: 100,
  },
  {
    id: "4",
    img: "/images/newArrivals/babyRomper.webp",
    subtitle: "Green baby romper",
    price: 100,
  },
  {
    id: "5",
    img: "/images/newArrivals/metalBridge.webp",
    subtitle: "Metal bridge sunglasses",
    price: 100,
  },
  {
    id: "6",
    img: "/images/newArrivals/sportCap.webp",
    subtitle: "Black and white sport cap",
    price: 100,
  },
];
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FavoriteIcon,
  FavoriteIconBox,
  Wrapper,
  Section,
  Title,
  Text,
  List,
  Item,
  Img,
  Subtitle,
  TextPrice,
  Button,
  SlideBox,
} from "./TrendingNow.styled";
import Box from "../Box/Box";

const TrendingNow = () => {
  return (
    <Section>
      <Wrapper>
        <Title>Trending now</Title>
        <Text>"Wardrobe must-haves: the top clothing items trending now."</Text>
        <List
          breakpoints={{
            620: {
              slidesPerView: 1,
              spaceBetween: 30,
            },

            730: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1040: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1900: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {trendingNow.map((product) => (
            <SwiperSlide key={product.id}>
              <SlideBox>
                <Item key={product.id}>
                  <Img src={product.img} />
                  <Subtitle>{product.subtitle}</Subtitle>
                  <TextPrice>{product.price}₴</TextPrice>
                  <FavoriteIconBox>
                    <FavoriteIcon />
                  </FavoriteIconBox>
                </Item>
              </SlideBox>
            </SwiperSlide>
          ))}
        </List>
        <Button>Explore top sales</Button>
      </Wrapper>
    </Section>
  );
};

export default TrendingNow;
