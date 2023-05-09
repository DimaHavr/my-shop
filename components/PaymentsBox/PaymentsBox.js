import Image from "next/image";
import {
  Wrapper,
  Form,
  CheckboxBox,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  Title,
  LogoBox,
} from "./PaymentsBox.styled";

const PaymentsBox = ({
  handlePaymentSubmit,
  handlePaymentCheckboxChange,
  paymentValue,
}) => {
  const Checkbox = ({ value, checked, onChange }) => {
    return (
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          name="category"
          value={value}
          id={value}
          checked={checked}
          onChange={onChange}
        />
        <CheckboxLabel htmlFor={value} checked={checked}>
          {value}
        </CheckboxLabel>
      </CheckboxContainer>
    );
  };

  return (
    <Wrapper>
      <Title>Виберіть метод оплати</Title>
      <Form onSubmit={handlePaymentSubmit}>
        <CheckboxBox>
          <Checkbox
            value="Оплата онлайн"
            checked={paymentValue === "Оплата онлайн"}
            onChange={handlePaymentCheckboxChange}
          />
          <Checkbox
            value="Оплата при отриманні"
            checked={paymentValue === "Оплата при отриманні"}
            onChange={handlePaymentCheckboxChange}
          />
        </CheckboxBox>
      </Form>
      <LogoBox>
        <Image
          src="/logos/Apple_Pay_logo.png"
          alt="Your logo"
          width={60}
          height={60}
        />
        <Image
          src="/logos/Google_Pay_Logo.png"
          alt="Your logo"
          width={60}
          height={60}
        />
        <Image
          src="/logos/logo_Privat24.png"
          alt="Your logo"
          width={60}
          height={60}
        />
        <Image
          src="/logos/Mastercard-logo.png"
          alt="Your logo"
          width={40}
          height={40}
        />
        <Image src="/logos/visa.svg" alt="Your logo" width={50} height={50} />
      </LogoBox>
    </Wrapper>
  );
};

export default PaymentsBox;
