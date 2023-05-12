import Link from "next/link";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  Item,
  Img,
  Subtitle,
  Wrapper,
  NextIcon,
  PrevIcon,
} from "./Categories.styled";

const Categories = ({ categories }) => {
  return (
    <Wrapper>
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
        navigation={{
          nextEl: ".slider-next-categories-btn",
          prevEl: ".slider-prev-categories-btn",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {categories.map((item) => {
          const title = item.attributes.title;
          const image = item.attributes.img.data.attributes.formats.small.url;
          const categoryPath =
            item.attributes.categories.data[0].attributes.slug;
          return (
            <SwiperSlide key={item.id}>
              <Link href={`/${categoryPath}/${item.attributes.slug}`} passHref>
                <Item>
                  <Img src={image} />
                  <Subtitle>{title}</Subtitle>
                </Item>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="slider-prev-categories-btn">
        <PrevIcon />
      </button>
      <button className="slider-next-categories-btn">
        <NextIcon />
      </button>
    </Wrapper>
  );
};

export default Categories;
