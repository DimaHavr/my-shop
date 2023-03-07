import Link from "next/link";

import {
  ProductImg,
  ProductText,
  CardIcon,
  ProductTextItem,
  ProductBox,
} from "./Product.styled";
import { useStateContext } from "../../context/StateContext";

const Product = ({ product }) => {
  const { image, name, slug, price, _type } = product;
  const { setQty, onAdd, qty } = useStateContext();

  return (
    <>
      <Link onClick={() => setQty(1)} href={`/${_type}/${slug.current}`}>
        <ProductImg src={image && image[0]} width={280} height={280} />
      </Link>
      <ProductBox>
        <ProductTextItem>{price}грн</ProductTextItem>
        <Link onClick={() => setQty(1)} href={`/${_type}/${slug.current}`}>
          <ProductText>{name}</ProductText>
        </Link>
        <CardIcon
          onClick={() => {
            onAdd(product, qty);
          }}
        />
      </ProductBox>
    </>
  );
};

export default Product;
