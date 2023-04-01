import {
  Section,
  Wrapper,
  List,
  Item,
  Subtitle,
  Text,
  DeliveryIcon,
  MoneyIcon,
  SupportIcon,
  SecureIcon,
} from "./ServicesList.styled";

const ServicesList = () => {
  return (
    <Section>
      <Wrapper>
        <List>
          <Item>
            <DeliveryIcon />
            <Subtitle>Fast Worldwide Shipping</Subtitle>
            <Text>Get free shipping over $250</Text>
          </Item>
          <Item>
            <SupportIcon />
            <Subtitle>24/7 Customer Support</Subtitle>
            <Text>Friendly 24/7 customer support</Text>
          </Item>
          <Item>
            <MoneyIcon />
            <Subtitle>Money Back Guarantee</Subtitle>
            <Text>We return money within 30 days</Text>
          </Item>
          <Item>
            <SecureIcon />
            <Subtitle>Secure Online Payment</Subtitle>
            <Text>Accept all major credit cards</Text>
          </Item>
        </List>
      </Wrapper>
    </Section>
  );
};

export default ServicesList;
