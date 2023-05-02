import {
  HeroBannerSection,
  HeroBannerContainer,
  HeroBannerText,
  HeroBannerTitle,
  HeroBannerButton,
  HeroBannerButtonSecond,
  HeroBannerButtonBox,
} from "./HeroBanner.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, HashNavigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box from "../Box/Box";
import Link from "next/link";

const backgroundImage = "/images/hero/imageBg1.webp";

const HeroBanner = ({ heroBanners }) => {
  console.log(heroBanners);
  return (
    <Box>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        spaceBetween={0}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {heroBanners.map((item) => {
          const { button_text, title, text_top } = item.attributes;
          const bannerPath = item.attributes.category.data.attributes.slug;
          const banner_img = item.attributes.banner_img.data.attributes.url;
          console.log(banner_img);
          return (
            <SwiperSlide key={item.id}>
              <Link href={`/${bannerPath}`}>
                <HeroBannerSection backgroundImage={banner_img}>
                  <HeroBannerContainer>
                    <HeroBannerText>{text_top}</HeroBannerText>
                    <HeroBannerTitle>{title}</HeroBannerTitle>
                    <HeroBannerButtonBox
                      display="flex"
                      gridGap="25px"
                      marginTop="60px"
                    >
                      <Link href="sale">
                        <HeroBannerButton>Розпродаж 2023</HeroBannerButton>
                      </Link>
                      <Link href={`/${bannerPath}`}>
                        <HeroBannerButtonSecond>
                          {button_text}
                        </HeroBannerButtonSecond>
                      </Link>
                    </HeroBannerButtonBox>
                  </HeroBannerContainer>
                </HeroBannerSection>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default HeroBanner;
