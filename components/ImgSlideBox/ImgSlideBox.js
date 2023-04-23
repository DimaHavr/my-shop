import { useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
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

const ImgSlideBox = ({ imagesArr, image }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [showImage, setShowImage] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
            const imageLarge = item.attributes.formats.small.url;
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
      <Img showImage={showImage} src={!selectedImage ? image : selectedImage} />
    </>
  );
};

export default ImgSlideBox;
