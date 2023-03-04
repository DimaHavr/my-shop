import dynamic from "next/dynamic";
import Box from "../../components/Box/Box";
import { useState, useEffect } from "react";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const Product = dynamic(() => import("../../components/Product/Product"));
const Layout = dynamic(() => import("../../components/Layout/Layout"));
import { useStateContext } from "../../context/StateContext";
import { client } from "../../lib/client";
import {
  DetailContainer,
  SmallImagesContainer,
  SmallImage,
  DetailImg,
  StarIcon,
  OutlineStarIcon,
  MinusIcon,
  PlusIcon,
  DetailDescContainer,
  QuantityContainer,
  BuyNowBtn,
  AddToCartBtn,
  List,
  ListItem,
  QuantityText,
  Title,
} from "./ProductDetails.styled";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  useEffect(() => {
    const lightbox = new SimpleLightbox(".gallery a");
  }, []);

  return (
    <Layout>
      <Box as="section">
        <DetailContainer>
          <Box className="gallery">
            <a href={image && image[index]}>
              <DetailImg src={image && image[index]} />
            </a>
            <SmallImagesContainer>
              {image?.map((item, i) => (
                <SmallImage
                  key={i}
                  src={item}
                  selected={i === index}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </SmallImagesContainer>
          </Box>
          <DetailDescContainer className="product-detail-desc">
            <Title>{name}</Title>
            <div className="reviews">
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <OutlineStarIcon />
              </div>
              <p>(20)</p>
            </div>
            <h4>Details: </h4>
            <p>{details}</p>
            <p className="price">${price}</p>
            <QuantityContainer>
              <h3>Quantity:</h3>
              <Box display="flex" alignItems="center" gridGap="10px">
                <MinusIcon onClick={decQty} />
                <QuantityText>{qty}</QuantityText>
                <PlusIcon onClick={incQty} />
              </Box>
            </QuantityContainer>
            <Box display="flex" gridGap="30px">
              <AddToCartBtn type="button" onClick={() => onAdd(product, qty)}>
                Add to Cart
              </AddToCartBtn>
              <BuyNowBtn type="button" onClick={handleBuyNow}>
                Buy Now
              </BuyNowBtn>
            </Box>
          </DetailDescContainer>
        </DetailContainer>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridGap="30px"
          flexDirection="column"
          paddingBottom="50px"
        >
          <h2>You may also like</h2>
          <List display="flex" gridGap="20px">
            {products.map((item) => (
              <ListItem key={item._id}>
                <Product key={item._id} product={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
