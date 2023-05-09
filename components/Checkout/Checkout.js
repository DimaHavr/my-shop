import Link from "next/link";
import { toast } from "react-hot-toast";
import { LiqPayPay } from "react-liqpay";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalQuantities,
  selectTotalPrice,
  selectCartItems,
  selectShowCart,
} from "../../redux/cart/selectors";
import { toggleCartItemQuantity, onRemove } from "../../redux/cart/cartSlice";
import { createGlobalStyle } from "styled-components";
import Box from "../../components/Box/Box";

import {
  CartContainer,
  CartWrapper,
  ImgContainer,
  Img,
  CloseIcon,
  Span,
  QuantityContainer,
  QuantityText,
  MinusIcon,
  PlusIcon,
  SubTitle,
  List,
  Item,
  Text,
  TextItem,
  IssueBtn,
  TotalContainer,
  BackBtn,
  CheckoutIcon,
  EmptyCartBox,
  RemoveBtn,
} from "./Checkout.styled";
import DeliveryBox from "../DeliveryBox/DeliveryBox";
const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ showCart }) => (showCart ? "hidden" : "auto")};
  }
`;

const Checkout = () => {
  const cartRef = useRef();
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantities = useSelector(selectTotalQuantities);
  const cartItems = useSelector(selectCartItems);
  const showCart = useSelector(selectShowCart);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // replace with code to save the data to your database or backend API
  };
  return (
    <div>
      <List>
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            const title = item.attributes.title;
            const image =
              item.attributes.img.data[0].attributes.formats.small.url;
            const price = item.attributes.price;
            const id = item.id;
            const color = item.color;
            const size = item.size;
            const itemTotalPrice = price * item.quantity;
            const categoryPath =
              item.attributes.categories.data[0].attributes.slug;
            const subCategoryPath =
              item.attributes.sub_categories.data[0].attributes.slug;
            return (
              <Item key={id}>
                <Box display="flex" gridGap="10px" alignItems="center">
                  <Link
                    href={`/${categoryPath}/${subCategoryPath}/${id}`}
                    passHref
                  >
                    <ImgContainer>
                      <Img src={image} />
                    </ImgContainer>
                  </Link>{" "}
                  <Box
                    display="flex"
                    flexDirection="column"
                    gridGap="5px"
                    justifyContent="space-around"
                    paddingRight="20px"
                  >
                    <Link href={`/women/product/${id}`} passHref>
                      <SubTitle>{title}</SubTitle>
                    </Link>
                    <Box display="flex" alignItems="baseline" gridGap="10px">
                      <TextItem>Розмір:</TextItem>
                      <Text>{size}</Text>
                    </Box>
                    <Box display="flex" alignItems="baseline" gridGap="10px">
                      <TextItem>Колір:</TextItem>
                      <Text>{color}</Text>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      gridGap="5px"
                    >
                      <QuantityContainer>
                        <MinusIcon
                          onClick={() =>
                            dispatch(
                              toggleCartItemQuantity({
                                id: id,
                                value: "dec",
                              })
                            )
                          }
                        />
                        <QuantityText>{item.quantity}</QuantityText>
                        <PlusIcon
                          onClick={() =>
                            dispatch(
                              toggleCartItemQuantity({
                                id: id,
                                value: "inc",
                              })
                            )
                          }
                        />
                      </QuantityContainer>
                      <Text>{parseFloat(itemTotalPrice.toFixed(2))}₴</Text>
                    </Box>
                  </Box>
                </Box>
                <RemoveBtn
                  onClick={() => {
                    toast.success(`${title} видалено з кошика!`, {
                      style: {
                        borderRadius: "10px",
                        background: "grey",
                        color: "#fff",
                      },
                    });
                    dispatch(onRemove({ product: item }));
                  }}
                >
                  Видалити
                </RemoveBtn>
              </Item>
            );
          })}
      </List>

      <DeliveryBox
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />

      <LiqPayPay
        title={"Оплатити"}
        publicKey={"sandbox_i43745646834"}
        privateKey={"sandbox_lfmoh83YOMyicWQetpGIy5OXOhhySaVLUEMADjt7"}
        amount={totalPrice.toString()}
        description="Payment for product"
        currency="UAH"
        orderId={Math.floor(1 + Math.random() * 900000000)}
        result_url="http://localhost:3000/"
        server_url="https://www.liqpay.ua/uk/checkout/sandbox_i43745646834"
        product_description="Online courses"
        style={{ margin: "8px" }}
        disabled={false}
      />
    </div>
  );
};

export default Checkout;
