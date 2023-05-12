import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { LiqPayPay } from "react-liqpay";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTotalPrice, selectCartItems } from "../../redux/cart/selectors";
import { toggleCartItemQuantity, onRemove } from "../../redux/cart/cartSlice";
import Box from "../../components/Box/Box";

import {
  CheckoutWrapper,
  CheckoutContainer,
  ImgContainer,
  Img,
  QuantityContainer,
  QuantityText,
  MinusIcon,
  PlusIcon,
  SubTitle,
  List,
  Item,
  Text,
  TextItem,
  RemoveBtn,
  SummaryOrderBox,
  SummaryOrderItem,
  Td,
  Th,
  THead,
  Table,
  SummaryBtn,
  Overlay,
  CloseIcon,
  SummaryOrderWrapper,
} from "./Checkout.styled";
import DeliveryBox from "../DeliveryBox/DeliveryBox";
import PersonDataBox from "../PersonDataBox/PersonDataBox";
import PaymentsBox from "../PaymentsBox/PaymentsBox";
import { Title } from "../DeliveryBox/DeliveryBox.styled";

const Checkout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const totalPrice = useSelector(selectTotalPrice);
  const cartItems = useSelector(selectCartItems);
  const [showSummaryForm, setShowSummaryForm] = useState(false);
  const [paymentValue, setPaymentValue] = useState(null);
  const [deliveryData, setDeliveryData] = useState([]);
  const [clientFormData, setClientFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [deliveryFormData, setDeliveryFormData] = useState({
    area: "",
    region: "",
    city: "",
    homeNumber: "",
    localNumber: "",
    postIndex: "",
    comment: "",
  });
  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/");
    }
  }, [cartItems, router]);
  const handleToggleSummaryForm = () => {
    setShowSummaryForm((prevShowForm) => !prevShowForm);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    console.log(paymentValue);
  };
  const handlePaymentCheckboxChange = (event) => {
    const { value } = event.target;
    setPaymentValue(value);
  };
  const handleClientInputChange = (event) => {
    const { name, value } = event.target;
    setClientFormData({ ...clientFormData, [name]: value });
  };

  const handleClientSubmit = (event) => {
    event.preventDefault();
    console.log(clientFormData);
  };
  const handleDeliveryInputChange = (event) => {
    const { name, value } = event.target;
    setDeliveryFormData({ ...deliveryFormData, [name]: value });
  };

  const handleDeliverySubmit = (event) => {
    event.preventDefault();
    console.log(deliveryFormData);
  };
  const TableRow = ({ value }) =>
    value && (
      <tr>
        <Td>{value}</Td>
      </tr>
    );

  const checkFormData = () => {
    let isValid = true;

    switch (true) {
      case !clientFormData.firstName:
        isValid = false;
        toast.error(`Заповніть особісті дані...`, {
          style: {
            borderRadius: "10px",
            background: "grey",
            color: "#fff",
          },
        });
        break;

      case !paymentValue:
        isValid = false;
        toast.error(`Виберіть метод оплати...`, {
          style: {
            borderRadius: "10px",
            background: "grey",
            color: "#fff",
          },
        });
        break;

      case !deliveryFormData.area && !deliveryData.Description:
        isValid = false;
        toast.error(`Заповніть дані доставки...`, {
          style: {
            borderRadius: "10px",
            background: "grey",
            color: "#fff",
          },
        });
        break;

      default:
        // Додаткові перевірки або дії, якщо всі дані валідні
        break;
    }

    return isValid;
  };
  const checkSummary = checkFormData();
  console.log(checkSummary);
  return (
    cartItems && (
      <CheckoutWrapper>
        <List>
          {cartItems.map((item) => {
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
                <Box display="flex" gridGap="15px" alignItems="center">
                  <Link
                    href={`/${categoryPath}/${subCategoryPath}/${id}`}
                    passHref
                  >
                    <ImgContainer>
                      <Img src={image} />
                    </ImgContainer>
                  </Link>
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
        <CheckoutContainer>
          <Box
            display="flex"
            flexDirection="column"
            gridGap="10px"
            justifyContent="space-between"
          >
            <PersonDataBox
              handleClientSubmit={handleClientSubmit}
              handleClientInputChange={handleClientInputChange}
              clientFormData={clientFormData}
            />
            <PaymentsBox
              handlePaymentSubmit={handlePaymentSubmit}
              handlePaymentCheckboxChange={handlePaymentCheckboxChange}
              paymentValue={paymentValue}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gridGap="10px"
            justifyContent="space-between"
          >
            <DeliveryBox
              handleDeliveryInputChange={handleDeliveryInputChange}
              handleDeliverySubmit={handleDeliverySubmit}
              deliveryFormData={deliveryFormData}
              setDeliveryData={setDeliveryData}
            />
            <SummaryOrderBox>
              <SummaryBtn onClick={handleToggleSummaryForm}>
                Підсумок замовлення
              </SummaryBtn>
            </SummaryOrderBox>
          </Box>
        </CheckoutContainer>
        {checkSummary && showSummaryForm && (
          <Overlay showSummaryForm={showSummaryForm}>
            <SummaryOrderWrapper>
              <CloseIcon onClick={handleToggleSummaryForm} />
              <Title>Підсумок замовлення</Title>
              <SummaryOrderItem>
                <Table>
                  <THead>
                    <tr>
                      <Th>Особисті дані</Th>
                    </tr>
                  </THead>
                  <tbody>
                    {Object.entries(clientFormData).map(([key, value]) => (
                      <TableRow key={key} title={key} value={value} />
                    ))}
                  </tbody>
                </Table>
                <Table>
                  <THead>
                    <tr>
                      <Th>Дані доставки</Th>
                    </tr>
                  </THead>
                  {deliveryData?.Description ? (
                    <>
                      <tbody>
                        <Td>{deliveryData?.SettlementAreaDescription}</Td>
                      </tbody>
                      <tbody>
                        <Td>
                          {deliveryData?.SettlementTypeDescription}{" "}
                          {deliveryData?.CityDescription}
                        </Td>
                      </tbody>
                      <tbody>
                        <Td>{deliveryData?.Description}</Td>
                      </tbody>
                    </>
                  ) : (
                    deliveryFormData.area !== "" && (
                      <tbody>
                        {Object.entries(deliveryFormData).map(
                          ([key, value]) => (
                            <TableRow key={key} title={key} value={value} />
                          )
                        )}
                      </tbody>
                    )
                  )}
                </Table>
                <Table>
                  <THead>
                    <tr>
                      <Th>Метод оплати</Th>
                    </tr>
                  </THead>
                  <tbody>
                    <Td>{paymentValue}</Td>
                  </tbody>
                </Table>
              </SummaryOrderItem>
              <Box display="flex" alignItems="center" gridGap="10px">
                <SubTitle>Сума до cплати:</SubTitle>
                <Text>{totalPrice}грн</Text>
              </Box>

              {paymentValue === "Оплата онлайн" ? (
                <LiqPayPay
                  title={"Оплатити"}
                  publicKey={process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY}
                  privateKey={process.env.NEXT_PUBLIC_LIQPAY_PRIVAT_KEY}
                  amount={totalPrice.toString()}
                  description="Оплата для Roztox"
                  currency="UAH"
                  orderId={Math.floor(1 + Math.random() * 900000000)}
                  result_url={process.env.NEXT_PUBLIC_LIQPAY_RESULT_URL}
                  server_url={"http://server.domain.com/liqpay"}
                  product_description="Оплата товарів"
                  disabled={false}
                  extra={[<SummaryBtn key="1">Замовити</SummaryBtn>]}
                />
              ) : (
                <SummaryBtn onClick={() => router.push("/success")}>
                  Замовити
                </SummaryBtn>
              )}
            </SummaryOrderWrapper>
          </Overlay>
        )}
      </CheckoutWrapper>
    )
  );
};

export default Checkout;
