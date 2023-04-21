import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { List, Item, Img, Subtitle } from "./Categories.styled";
import Box from "../Box/Box";

const Categories = ({ categories }) => {
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
        {categories.map((item) => {
          const title = item.attributes.title;
          const image = item.attributes.img.data.attributes.formats.small.url;
          return (
            <SwiperSlide key={item.id}>
              <Item>
                <Img src={image} />
                <Subtitle>{title}</Subtitle>
              </Item>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Categories;
