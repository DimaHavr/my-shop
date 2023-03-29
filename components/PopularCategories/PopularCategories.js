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
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Section,
  Wrapper,
  Title,
  List,
  Item,
  Img,
  Subtitle,
} from "./PopularCategories.styled";

const PopularCategories = () => {
  return (
    <Section>
      <Wrapper>
        <Title>Popular categories</Title>
        <List
          breakpoints={{
            460: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1224: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
