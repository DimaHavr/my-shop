import Link from "next/link";
import { ProductImg, ProductText, ProductTextItem } from "./Product.styled";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <Link href={`/product/${slug.current}`}>
      <ProductImg src={image && image[0]} width={280} height={280} />
      <ProductText>{name}</ProductText>
      <ProductTextItem>${price}</ProductTextItem>
    </Link>
  );
};

export default Product;
