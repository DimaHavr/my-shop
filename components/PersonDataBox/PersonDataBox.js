import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  InputContainer,
  FormWrapper,
  Form,
  Title,
  FormBtn,
  FormInput,
  NameIcon,
  EmailIcon,
  PhoneIcon,
} from "./PersonDataBox.styled";

const PersonDataBox = ({
  clientFormData,
  handleClientInputChange,
  handleClientSubmit,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (!isFormFilled()) {
      toast.error("Будь ласка, заповніть всі поля!", {
        style: {
          borderRadius: "10px",
          background: "grey",
          color: "#fff",
        },
      });
    } else {
      setIsSaved(true);
      toast.success(`Дані збережено!`, {
        style: {
          borderRadius: "10px",
          background: "grey",
          color: "#fff",
        },
      });
    }
  };

  const isFormFilled = () => {
    return (
      clientFormData.firstName &&
      clientFormData.lastName &&
      clientFormData.phoneNumber
    );
  };

  return (
    <FormWrapper>
      <Title>Особисті дані</Title>
      <Form onSubmit={handleClientSubmit}>
        <InputContainer>
          <NameIcon />
          <FormInput
            placeholder="Ім'я"
            type="text"
            name="firstName"
            value={clientFormData.firstName}
            onChange={handleClientInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <NameIcon />
          <FormInput
            placeholder="Прізвище"
            type="text"
            name="lastName"
            value={clientFormData.lastName}
            onChange={handleClientInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <PhoneIcon />
          <FormInput
            placeholder="Телефон"
            type="phone"
            name="phoneNumber"
            value={clientFormData.phoneNumber}
            onChange={handleClientInputChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <EmailIcon />
          <FormInput
            placeholder="E-mail"
            type="email"
            name="email"
            value={clientFormData.email}
            onChange={handleClientInputChange}
            required
          />
        </InputContainer>

        {!isSaved ? (
          <FormBtn onClick={handleSave} type="submit">
            Зберегти
          </FormBtn>
        ) : (
          <FormBtn onClick={handleSave} type="button">
            Оновити
          </FormBtn>
        )}
      </Form>
    </FormWrapper>
  );
};

export default PersonDataBox;
