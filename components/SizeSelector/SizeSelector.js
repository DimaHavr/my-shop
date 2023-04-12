import { useEffect, useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  SizeSelectorStyled,
  SizeButton,
  SlideBox,
  PrevBtn,
  NextBtn,
  NextIcon,
  PrevIcon,
  Subtitle,
  Text,
} from "../SizeSelector/SizeSelector.styled";
import Box from "../Box/Box";

const SizeSelector = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <SizeSelectorStyled>
      <Box display="flex" alignItems="baseline" gridGap="10px">
        <Subtitle>Size:</Subtitle> <Text> {selectedSize}</Text>
      </Box>
      <Swiper
        slidesPerView={3}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {sizes.map((size) => (
          <SwiperSlide key={size}>
            <SlideBox>
              <SizeButton
                key={size}
                active={selectedSize === size}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </SizeButton>
            </SlideBox>
          </SwiperSlide>
        ))}
        <NextBtn ref={nextRef}>
          <NextIcon />
        </NextBtn>
        <PrevBtn ref={prevRef}>
          <PrevIcon />
        </PrevBtn>
      </Swiper>
    </SizeSelectorStyled>
  );
};

export default SizeSelector;
