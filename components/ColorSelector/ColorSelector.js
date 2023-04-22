import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectColor } from "../../redux/cart/selectors";
import { setColor } from "../../redux/cart/cartSlice";
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
const ColorSelector = ({ colors }) => {
  const selectedColor = useSelector(selectColor);
  const dispatch = useDispatch();
  const handleColorChange = (color) => {
    dispatch(setColor(color));
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    handleColorChange();
  }, []);
  return (
    <ColorSelectorStyled>
      <Box display="flex" alignItems="baseline" gridGap="10px">
        <Subtitle>Оберіть колір:</Subtitle> <Text> {selectedColor}</Text>
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
        {colors.map((color) => (
          <SwiperSlide key={color}>
            <SlideBox>
              <ColorButton
                key={color}
                active={selectedColor === color}
                color={color}
                onClick={() => handleColorChange(color)}
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
