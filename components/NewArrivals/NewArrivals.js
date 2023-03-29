const newArrivals = [
  {
    id: "1",
    img: "/images/newArrivals/babyShoes.webp",
    subtitle: "Baby shoes with laces",
    price: "100",
  },
  {
    id: "2",
    img: "/images/newArrivals/redDangleEarrings.webp",
    subtitle: "Red dangle earrings",
    price: "100",
  },
  {
    id: "3",
    img: "/images/newArrivals/jeans.webp",
    subtitle: "Mid-rise slim cropped fit jeans",
    price: "100",
  },
  {
    id: "4",
    img: "/images/newArrivals/babyRomper.webp",
    subtitle: "Green baby romper",
    price: "100",
  },
  {
    id: "5",
    img: "/images/newArrivals/metalBridge.webp",
    subtitle: "Metal bridge sunglasses",
    price: "100",
  },
  {
    id: "6",
    img: "/images/newArrivals/sportCap.webp",
    subtitle: "Black and white sport cap",
    price: "100",
  },
];
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Box from "../Box/Box";
import {
  FavoriteIcon,
  FavoriteIconBox,
  Wrapper,
  Section,
  Title,
  List,
  Item,
  Img,
  Subtitle,
  TextLink,
  TextPrice,
  Text,
} from "./NewArrivals.styled";

const NewArrivals = () => {
  return (
    <Section>
      <Wrapper>
        <Title>New arrivals</Title>
        <Text>Check out our latest arrivals for the upcoming season</Text>
        <TextLink href="#">See the collection here</TextLink>
        <List
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {newArrivals.map(({ id, img, subtitle, price }) => (
            <SwiperSlide key={id}>
              <Item key={id}>
                <Img src={img} />
                <Box padding="16px">
                  <Subtitle>{subtitle}</Subtitle>
                  <TextPrice>{price}$</TextPrice>
                </Box>
                <FavoriteIconBox>
                  <FavoriteIcon />
                </FavoriteIconBox>
              </Item>
            </SwiperSlide>
          ))}
        </List>
      </Wrapper>
    </Section>
  );
};

export default NewArrivals;
