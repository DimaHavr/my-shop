import { useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ColorSelectorStyled,
  ColorButton,
  SlideBox,
  PrevBtn,
  NextBtn,
  NextIcon,
  PrevIcon,
  Text,
  Subtitle,
} from "./ColorSelector.styled";
import Box from "../Box/Box";
const ColorSelector = ({ handleColorSelect, colors, selectedColor }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <ColorSelectorStyled>
      <Box display="flex" alignItems="baseline" gridGap="10px">
        <Subtitle>Color:</Subtitle> <Text> {selectedColor}</Text>
      </Box>
      <Swiper
        slidesPerView={4}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {colors.map((color) => (
          <SwiperSlide key={color}>
            <SlideBox>
              <ColorButton
                key={color}
                active={selectedColor === color}
                color={color}
                onClick={() => handleColorSelect(color)}
              ></ColorButton>
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
    </ColorSelectorStyled>
  );
};

export default ColorSelector;
