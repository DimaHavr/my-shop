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

const backgroundImage = "/images/hero/imageBg1.webp";

const HeroBanner = () => {
  return (
    <Box>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          waitForTransition: true,
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
        <SwiperSlide data-hash="slide1">
          <HeroBannerSection backgroundImage={backgroundImage}>
            <HeroBannerContainer>
              <HeroBannerText>New colection</HeroBannerText>
              <HeroBannerTitle>Menswear 2023</HeroBannerTitle>
              <HeroBannerButtonBox
                display="flex"
                gridGap="25px"
                marginTop="60px"
              >
                <HeroBannerButton>Shop sale</HeroBannerButton>
                <HeroBannerButtonSecond>
                  Shop the menswear
                </HeroBannerButtonSecond>
              </HeroBannerButtonBox>
            </HeroBannerContainer>
          </HeroBannerSection>
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <HeroBannerSection backgroundImage={backgroundImage}>
            <HeroBannerContainer>
              <HeroBannerText>New colection</HeroBannerText>
              <HeroBannerTitle>Women 2023</HeroBannerTitle>
              <HeroBannerButtonBox
                display="flex"
                gridGap="25px"
                marginTop="60px"
              >
                <HeroBannerButton>Shop sale</HeroBannerButton>
                <HeroBannerButtonSecond>
                  Shop the menswear
                </HeroBannerButtonSecond>
              </HeroBannerButtonBox>
            </HeroBannerContainer>
          </HeroBannerSection>
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <HeroBannerSection backgroundImage={backgroundImage}>
            <HeroBannerContainer>
              <HeroBannerText>New colection</HeroBannerText>
              <HeroBannerTitle>Kids 2023</HeroBannerTitle>
              <HeroBannerButtonBox
                display="flex"
                gridGap="25px"
                marginTop="60px"
              >
                <HeroBannerButton>Shop sale</HeroBannerButton>
                <HeroBannerButtonSecond>
                  Shop the menswear
                </HeroBannerButtonSecond>
              </HeroBannerButtonBox>
            </HeroBannerContainer>
          </HeroBannerSection>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroBanner;
