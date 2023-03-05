import Link from "next/link";

import {
  ProductImg,
  ProductText,
  CardIcon,
  ProductTextItem,
  ProductBox,
} from "./Product.styled";
import { useStateContext } from "../../context/StateContext";

const Product = ({ product, pageQuery }) => {
  const { image, name, slug, price } = product;
  const { setQty, onAdd, qty } = useStateContext();

  return (
    <ProductBox>
      <Link onClick={() => setQty(1)} href={`/${pageQuery}/${slug.current}`}>
        <ProductImg src={image && image[0]} width={280} height={280} />
        <ProductTextItem>{price}грн</ProductTextItem>
        <ProductText>{name}</ProductText>
      </Link>
      <CardIcon
        onClick={() => {
          onAdd(product, qty);
        }}
      />
    </ProductBox>
  );
};

export default Product;
