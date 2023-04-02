const popularCategories = [
  {
    id: "1",
    img: "/images/popularCategories/tops.webp",
    subtitle: "Tops",
  },
  {
    id: "2",
    img: "/images/popularCategories/tShirts.webp",
    subtitle: "T-shirts",
  },
  {
    id: "3",
    img: "/images/popularCategories/caps.webp",
    subtitle: "Caps",
  },
  {
    id: "4",
    img: "/images/popularCategories/sandals.webp",
    subtitle: "Sandals",
  },
  {
    id: "5",
    img: "/images/popularCategories/jackets.webp",
    subtitle: "Jackets",
  },
  {
    id: "6",
    img: "/images/popularCategories/coats.webp",
    subtitle: "Coats",
  },
];
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  Section,
  Wrapper,
  Title,
  List,
  Item,
  Img,
  Subtitle,
  Text,
} from "./PopularCategories.styled";

const PopularCategories = () => {
  return (
    <Section>
      <Wrapper>
        <Title>Popular categories</Title>
        <Text>
          "Wear what's trending: popular clothing categories to refresh your
          wardrobe."
        </Text>
        <List
          breakpoints={{
            460: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1224: {
              slidesPerView: 5,
              spaceBetween: 35,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {popularCategories.map(({ id, img, subtitle }) => (
            <SwiperSlide key={id}>
              <Item>
                <Img src={img} />
                <Subtitle>{subtitle}</Subtitle>
              </Item>
            </SwiperSlide>
          ))}
        </List>
      </Wrapper>
    </Section>
  );
};

export default PopularCategories;
