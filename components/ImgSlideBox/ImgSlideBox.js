import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { createGlobalStyle } from "styled-components";
import {
  ImgSlideBoxStyled,
  SlideBox,
  PrevBtn,
  NextBtn,
  NextIcon,
  PrevIcon,
  Img,
  ImgSmall,
  Overlay,
  CloseIcon,
  SlideModalBox,
} from "../ImgSlideBox/ImgSlideBox.styled";
const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showModal }) => (showModal ? "hidden" : "auto")};
  }
`;

const ImgSlideBox = ({ imagesArr }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const onCloseModal = (event) => {
      if (event.code === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", onCloseModal);

    return () => {
      window.removeEventListener("keydown", onCloseModal);
    };
  }, [setShowModal]);

  useEffect(() => {
    const getFirstImage = () => {
      return imagesArr.map((item) => {
        setSelectedImage(item.attributes.url);
      });
    };
    getFirstImage();
  }, []);

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
          {imagesArr.map((item, index) => {
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
                      setCurrentSlideIndex(index);
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
      <Img
        showImage={showImage}
        src={selectedImage}
        onClick={handleToggleModal}
      />

      {showModal && (
        <Overlay showModal={showModal}>
          <GlobalStyle showModal={showModal} />
          <CloseIcon onClick={handleToggleModal} />
          <Swiper
            initialSlide={currentSlideIndex}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {imagesArr.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <SlideModalBox>
                    <Image
                      alt={item.attributes.name}
                      width={item.attributes.width}
                      height={item.attributes.height}
                      src={item.attributes.url}
                    />
                  </SlideModalBox>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Overlay>
      )}
    </>
  );
};

export default ImgSlideBox;
