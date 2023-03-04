import Link from "next/link";
import "swiper/css/pagination";
import { urlFor } from "../../lib/client";

import {
  HeroBannerSection,
  HeroBannerContainer,
  HeroBannerImg,
  HeroBannerText,
  HeroBannerDesc,
  HeroBannerImgSecond,
} from "./HeroBanner.styled";

const HeroBanner = ({ heroBanner }) => {
  return (
    <HeroBannerSection>
      <HeroBannerContainer href={`/product/id`}>
        <h3>{heroBanner.midText}</h3>
        <p>{heroBanner.discount}</p>
        <p>{heroBanner.saleTime}</p>
        <h1>{heroBanner.product}</h1>
        <HeroBannerImg
          src={urlFor(heroBanner.image)}
          alt={heroBanner.product}
        />
        <HeroBannerImgSecond
          src={urlFor(heroBanner.image2)}
          alt={heroBanner.product}
        />
      </HeroBannerContainer>
    </HeroBannerSection>
  );
};

export default HeroBanner;
