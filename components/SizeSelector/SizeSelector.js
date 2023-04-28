import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSize } from "../../redux/cart/selectors";
import { setSize } from "../../redux/cart/cartSlice";
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
  const dispatch = useDispatch();
  const selectedSize = useSelector(selectSize);
  const handleSizeChange = (size) => {
    dispatch(setSize(size));
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <SizeSelectorStyled>
      <Box display="flex" alignItems="baseline" gridGap="10px">
        <Subtitle>Оберіть розмір:</Subtitle> <Text>{selectedSize}</Text>
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
          <SwiperSlide key={size.attributes.name}>
            <SlideBox>
              <SizeButton
                key={size.id}
                active={selectedSize === size.attributes.name}
                onClick={() => handleSizeChange(size.attributes.name)}
              >
                {size.attributes.name}
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
