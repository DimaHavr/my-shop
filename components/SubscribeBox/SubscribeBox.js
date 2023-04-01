import Link from "next/link";
import { useState } from "react";
import Box from "../Box/Box";
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
  Label,
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
        I agree to receive communications from Createx Store.
      </CheckboxConfirmText>
    </CheckboxContainerConfirm>
  );
  return (
    <Section>
      <Wrapper>
        <div>
          <TextBox>
            <TextItem>Subscribe for updates</TextItem>
            <Text>
              Subscribe for exclusive early sale access and new arrivals.
            </Text>
          </TextBox>
          <Form>
            <CheckboxBox>
              <Checkbox
                value="Men"
                checked={selectedItems.includes("Men")}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                value="Women"
                checked={selectedItems.includes("Women")}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                value="Girls"
                checked={selectedItems.includes("Girls")}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                value="Boys"
                checked={selectedItems.includes("Boys")}
                onChange={handleCheckboxChange}
              />
            </CheckboxBox>
            <InputBox>
              <Label>Email</Label>
              <InputButtonBox>
                <Input type="email" required placeholder="Your working email" />
                <Button>Subscribe</Button>
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
