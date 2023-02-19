import { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loader } from "../Loader/Loader";
import {
  FormContainer,
  FormInput,
  FormButton,
  EmailIcon,
  InputContainer,
  ContactIcon,
  CommentIcon,
  UserIcon,
  CloseButton,
  ContactsLink,
  ContactsBox,
  ContactsText,
} from "./SubmitForm.styled";

const SubmitForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [textArea, setTextArea] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name,
      email,
      phoneNumber,
      textArea,
    };

    try {
      const response = await fetch("/api/sendForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        onClose();
        Notify.success("Заявка надіслана! Очікуйте на контакт з менеджером...");
      } else {
        Notify.failure("Помилка при відправці заявки");
      }
    } catch (error) {
      Notify.failure("Помилка при відправці заявки");
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <FormContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <UserIcon />
            <FormInput
              type="name"
              placeholder="Ім'я"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength="15"
              required
            />
          </InputContainer>
          <InputContainer>
            <EmailIcon />
            <FormInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <ContactIcon />
            <FormInput
              type="tel"
              placeholder="Номер телефону"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              maxLength="15"
              required
            />
          </InputContainer>
          <InputContainer>
            <CommentIcon />
            <FormInput
              type="text"
              placeholder="Комментар"
              value={textArea}
              onChange={(event) => setTextArea(event.target.value)}
            />
          </InputContainer>
          <FormButton type="submit">Надіслати</FormButton>
        </form>
      )}
      <CloseButton onClick={onClose} />
      <ContactsBox>
        <ContactsText>Зателефонувати:</ContactsText>
        <ContactsLink onClick={() => onClose()} href="tel:+380961111111">
          +38 097 77 77 77
        </ContactsLink>
      </ContactsBox>
    </FormContainer>
  );
};

export default SubmitForm;
