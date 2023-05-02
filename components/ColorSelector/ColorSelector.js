import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectColor } from "../../redux/cart/selectors";
import { setColor } from "../../redux/cart/cartSlice";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
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
      <Box display="flex" alignItems="flex-end" gridGap="10px">
        <Subtitle>Оберіть колір:</Subtitle> <Text> {selectedColor}</Text>
      </Box>
      <Swiper
        slidesPerView={3}
        initialSlide={2}
        // navigation={{
        //   nextEl: nextRef.current,
        //   prevEl: prevRef.current,
        // }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        // loop={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        {colors.map((color) => (
          <SwiperSlide key={color.id}>
            <SlideBox>
              <ColorButton
                key={color.attributes.name}
                active={selectedColor === color.attributes.name}
                color={color.attributes.name}
                codeHex={color.attributes.code_hex}
                onClick={() => handleColorChange(color.attributes.name)}
              ></ColorButton>
            </SlideBox>
          </SwiperSlide>
        ))}
        {/* <NextBtn ref={nextRef}>
          <NextIcon />
        </NextBtn>
        <PrevBtn ref={prevRef}>
          <PrevIcon />
        </PrevBtn> */}
      </Swiper>
    </ColorSelectorStyled>
  );
};

export default ColorSelector;
