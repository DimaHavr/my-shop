import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  ProductCarouselSection,
  ProductCarouselContainer,
  ProductCarouselImg,
} from "./ProductCarousel.styled";

const ProductCarouselArr = [
  {
    id: 1,
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/%D0%B1%D0%B0%D0%BD%D0%B5%D1%80%D0%B8/Part%202%20(3)-ratio-width-1200-png.webp",
    alt: "ropeaccess work",
  },
  {
    id: 2,
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/%D0%B1%D0%B0%D0%BD%D0%B5%D1%80%D0%B8/Part%202%20(3)-ratio-width-1200-png.webp",
    alt: "ropeaccess work",
  },
  {
    id: 3,
    img: "https://merrygoround.com.ua/Media/shop-11199/_assets/%D0%B1%D0%B0%D0%BD%D0%B5%D1%80%D0%B8/Part%202%20(3)-ratio-width-1200-png.webp",
    alt: "ropeaccess work",
  },
];

const ProductCarousel = () => {
  return (
    <ProductCarouselSection>
      <ProductCarouselContainer>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          centeredSlidesBounds={true}
          loop
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
        >
          {ProductCarouselArr.map(({ img, id, alt }) => (
            <SwiperSlide
              style={{ display: "flex", justifyContent: "center" }}
              key={id}
            >
              <Link href="/about">
                <ProductCarouselImg
                  src={img}
                  alt={alt}
                  width="800"
                  height="600"
                  loading="lazy"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </ProductCarouselContainer>
    </ProductCarouselSection>
  );
};

export default ProductCarousel;
