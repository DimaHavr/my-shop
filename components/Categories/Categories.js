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
  {
    id: "7",
    img: "/images/popularCategories/tops.webp",
    subtitle: "Tops",
  },
  {
    id: "8",
    img: "/images/popularCategories/tShirts.webp",
    subtitle: "T-shirts",
  },
  {
    id: "9",
    img: "/images/popularCategories/tops.webp",
    subtitle: "Tops",
  },
  {
    id: "10",
    img: "/images/popularCategories/tShirts.webp",
    subtitle: "T-shirts",
  },
];
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { List, Item, Img, Subtitle } from "./Categories.styled";
import Box from "../Box/Box";

const Categories = () => {
  return (
    <Box paddingTop="0px">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          420: {
            slidesPerView: 3,
            spaceBetween: 0,
          },

          640: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          740: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          960: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 8,
            spaceBetween: 0,
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
      </Swiper>
    </Box>
  );
};

export default Categories;
