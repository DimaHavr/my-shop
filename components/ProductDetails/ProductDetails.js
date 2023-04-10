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
  console.log(product);
  return (
    <Section>
      <Wrapper>
        <Title>{product.title}</Title>
        <ContentWrapper>
          <ImgBox>
            <Img src={product.image} />
          </ImgBox>
          <Sidebar>
            <TextPrice>{product.price}</TextPrice>

            <DescText>{product.description}</DescText>
          </Sidebar>
        </ContentWrapper>
      </Wrapper>
    </Section>
  );
};

export default ProductDetails;
