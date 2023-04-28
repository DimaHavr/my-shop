import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
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
