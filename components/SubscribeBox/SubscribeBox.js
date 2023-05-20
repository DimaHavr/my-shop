import { useState } from "react";
import {
  CheckIcon,
  Wrapper,
  Section,
  Img,
  TextItem,
  TextBox,
  Text,
  Button,
  Form,
  InputBox,
  InputButtonBox,
  Input,
  CheckboxBox,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  CheckboxContainerConfirm,
  CheckboxInputConfirm,
  CheckboxLabelConfirm,
  CheckboxConfirmText,
} from "./SubscribeBox.styled";

const SubscribeBox = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };
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
  const handleCheckboxChangeConfirm = (event) => {
    const { value } = event.target;
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };
  const ConfirmCheckbox = ({ value, checked, onChange }) => (
    <CheckboxContainerConfirm>
      <CheckboxInputConfirm
        type="checkbox"
        name="confirm"
        value={value}
        id={value}
        checked={checked}
        onChange={onChange}
      />
      <CheckboxLabelConfirm htmlFor={value} checked={checked}>
        {checked && <CheckIcon />}
      </CheckboxLabelConfirm>
      <CheckboxConfirmText>
        Я згоден(а) отримувати повідомлення від Createx Store.
      </CheckboxConfirmText>
    </CheckboxContainerConfirm>
  );
  return (
    <Section>
      <Wrapper>
        <div>
          <TextBox>
            <TextItem>Підпишіться на оновлення</TextItem>
            <Text>
              Підпишіться на ексклюзивний доступ до раннього розпродажу та нових
              надходжень.
            </Text>
          </TextBox>
          <Form>
            <CheckboxBox>
              {/* <Checkbox
                value="Men"
                checked={selectedItems.includes("Men")}
                onChange={handleCheckboxChange}
              /> */}
              <Checkbox
                value="Жінки"
                checked={selectedItems.includes("Жінки")}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                value="Дівчатка"
                checked={selectedItems.includes("Дівчатка")}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                value="Хлопчики"
                checked={selectedItems.includes("Хлопчики")}
                onChange={handleCheckboxChange}
              />
            </CheckboxBox>
            <InputBox>
              <InputButtonBox>
                <Input type="email" required placeholder="Електронна пошта" />
                <Button>Підписатися</Button>
              </InputButtonBox>
            </InputBox>
            <ConfirmCheckbox
              value="confirm"
              required
              checked={selectedItems.includes("confirm")}
              onChange={handleCheckboxChangeConfirm}
            />
          </Form>
        </div>
        <Img src="../../images/subscribeBox/image1.png" />
      </Wrapper>
    </Section>
  );
};

export default SubscribeBox;
