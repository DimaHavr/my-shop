import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  Section,
  Wrapper,
  Title,
  Item,
  Img,
  Subtitle,
  Text,
} from "./PopularCategories.styled";
import Link from "next/link";

const PopularCategories = ({ popularCategories }) => {
  return (
    <Section>
      <Wrapper>
        <Title>Популярні категорії</Title>
        <Text>
          "Носіть те, що в тренді: популярні категорії одягу для оновлення
          гардеробу".
        </Text>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={4}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
          }}
          // loop={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1560: {
              slidesPerView: 7,
            },
          }}
          navigation={true}
          modules={[Navigation, EffectCoverflow]}
          className="mySwiper"
        >
          {popularCategories.data.map((item) => {
            const title = item.attributes.title;
            const image = item.attributes.img.data.attributes.formats.small.url;
            const categoryPath =
              item.attributes.categories.data[0].attributes.slug;
            return (
              <SwiperSlide key={item.id}>
                <Link href={`${categoryPath}/${item.attributes.slug}`} passHref>
                  <Item>
                    <Img src={image} />
                    <Subtitle>{title}</Subtitle>
                  </Item>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Wrapper>
    </Section>
  );
};

export default PopularCategories;
