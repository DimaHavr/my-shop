const newArrivals = [
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
import { useStateContext } from "../../context/StateContext";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  Button,
} from "./NewArrivals.styled";

const NewArrivals = () => {
  const { onAdd, qty } = useStateContext();
  return (
    <Section>
      <Wrapper>
        <Title>New arrivals</Title>
        <Text>Check out our latest arrivals for the upcoming season</Text>
        <TextLink href="#">See the collection here</TextLink>
        <List
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            420: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1224: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
          }}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {newArrivals.map((product) => (
            <SwiperSlide key={product.id}>
              <Item key={product.id}>
                <Img src={product.img} />
                <Subtitle>{product.subtitle}</Subtitle>
                <TextPrice>{product.price}$</TextPrice>
                <Button onClick={() => onAdd(product, qty)}>Buy now</Button>
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
