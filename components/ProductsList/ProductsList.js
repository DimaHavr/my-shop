import axios from "axios";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectQty } from "../../redux/cart/selectors";
import { onAdd } from "../../redux/cart/cartSlice";
import Loader from "../Loader/Loader";
import {
  Section,
  Wrapper,
  List,
  Item,
  Img,
  Subtitle,
  TextPrice,
  ImgBox,
  AddBtn,
} from "./ProductsList.styled";

const ProductsList = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const quantity = useSelector(selectQty);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          {children}

          <List>
            {products.map((product) => (
              <Item key={product.id}>
                <ImgBox>
                  <Img src={product.image} alt={product.title} />
                </ImgBox>
                <Subtitle>{product.title}</Subtitle>
                <TextPrice>{product.price}₴</TextPrice>
                <AddBtn
                  onClick={() => {
                    toast.success(`${product?.title} added to cart...`, {
                      style: {
                        borderRadius: "10px",
                        background: "#fff",
                        color: "#333",
                      },
                    });
                    dispatch(onAdd({ product, quantity }));
                  }}
                >
                  Add to cart
                </AddBtn>
              </Item>
            ))}
          </List>

          {children}
        </Wrapper>
      )}
    </Section>
  );
};

export default ProductsList;
