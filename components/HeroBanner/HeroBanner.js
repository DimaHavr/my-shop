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

const HeroBanner = () => {
  return (
    <Box>
      <Swiper
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: true,
        // }}
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
        <SwiperSlide data-hash="slide1">
          <HeroBannerSection backgroundImage={backgroundImage}>
            <HeroBannerContainer>
              <HeroBannerText>New collection</HeroBannerText>
              <HeroBannerTitle>Menswear 2023</HeroBannerTitle>
              <HeroBannerButtonBox
                display="flex"
                gridGap="25px"
                marginTop="60px"
              >
                <Link href="sale">
                  <HeroBannerButton>Shop sale</HeroBannerButton>
                </Link>
                <Link href="mens">
                  <HeroBannerButtonSecond>
                    Shop the menswear
                  </HeroBannerButtonSecond>
                </Link>
              </HeroBannerButtonBox>
            </HeroBannerContainer>
          </HeroBannerSection>
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <HeroBannerSection backgroundImage={backgroundImage}>
            <HeroBannerContainer>
              <HeroBannerText>New collection</HeroBannerText>
              <HeroBannerTitle>Women 2023</HeroBannerTitle>
              <HeroBannerButtonBox
                display="flex"
                gridGap="25px"
                marginTop="60px"
              >
                <Link href="sale">
                  <HeroBannerButton>Shop sale</HeroBannerButton>
                </Link>
                <Link href="women">
                  <HeroBannerButtonSecond>
                    Shop the women
                  </HeroBannerButtonSecond>
                </Link>
              </HeroBannerButtonBox>
            </HeroBannerContainer>
          </HeroBannerSection>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroBanner;
