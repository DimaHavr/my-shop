import { useRef, useState, useCallback, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import {
  ImgSlideBoxStyled,
  SlideBox,
  PrevBtn,
  NextBtn,
  NextIcon,
  PrevIcon,
  Img,
  ImgSmall,
} from "../ImgSlideBox/ImgSlideBox.styled";

const ImgSlideBox = ({ imagesArr }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [showImage, setShowImage] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const getFirstImage = () => {
      return imagesArr.map((item) => {
        setSelectedImage(item.attributes.url);
      });
    };
    getFirstImage();
  }, []);

  const getItems = useCallback(() => {
    return imagesArr.map((item) => {
      return <a key={item.id} data-src={item.attributes.url}></a>;
    });
  }, [imagesArr]);

  return (
    <>
      <ImgSlideBoxStyled>
        <Swiper
          direction={"horizontal"}
          slidesPerView={2}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          breakpoints={{
            480: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            930: { slidesPerView: 3, direction: "vertical" },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {imagesArr.map((item) => {
            const imageLarge = item.attributes.url;
            const imageSmall = item.attributes.formats.small.url;
            return (
              <SwiperSlide key={item.id}>
                <SlideBox>
                  <ImgSmall
                    src={imageSmall}
                    onClick={() => {
                      setSelectedImage(imageLarge);
                      setShowImage(true);
                    }}
                  />
                </SlideBox>
              </SwiperSlide>
            );
          })}
          <NextBtn ref={nextRef}>
            <NextIcon />
          </NextBtn>
          <PrevBtn ref={prevRef}>
            <PrevIcon />
          </PrevBtn>
        </Swiper>
      </ImgSlideBoxStyled>
      <LightGallery speed={400} plugins={[lgZoom]}>
        {getItems()}
        <Img showImage={showImage} src={selectedImage} />
      </LightGallery>
    </>
  );
};

export default ImgSlideBox;
