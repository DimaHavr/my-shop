import Box from "../Box/Box";
import {
  Section,
  Wrapper,
  List,
  Item,
  Img,
  Title,
  TextPrice,
  ImgBox,
  ContentWrapper,
  DescText,
  FavoriteIconBox,
  FavoriteIconRemove,
  FavoriteIcon,
  AddBtn,
  Sidebar,
} from "./ProductDetails.styled";

const ProductDetails = ({ product }) => {
  const { id, title, image, price, description } = product;
  return (
    <Section>
      <Wrapper>
        <Title>{title}</Title>
        <ContentWrapper>
          <ImgBox>
            <Img src={image} />
          </ImgBox>
          <Sidebar>
            <TextPrice>{price}</TextPrice>

            <DescText>{description}</DescText>
          </Sidebar>
        </ContentWrapper>
      </Wrapper>
    </Section>
  );
};

export default ProductDetails;
