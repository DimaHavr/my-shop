import Box from "../Box/Box";
import {
  Section,
  Wrapper,
  List,
  Item,
  TextBox,
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
            <TextBox>
              <Subtitle>Швидка доставка по всій Україні</Subtitle>
              <Text>Отримайте безкоштовну доставку на суму понад 1500грн</Text>
            </TextBox>
          </Item>
          <Item>
            <SupportIcon />
            <TextBox>
              <Subtitle>Підтримка клієнтів 24/7</Subtitle>
              <Text>Дружня підтримка клієнтів 24/7</Text>
            </TextBox>
          </Item>
          <Item>
            <MoneyIcon />
            <TextBox>
              <Subtitle>Гарантія повернення грошей</Subtitle>
              <Text>Ми повертаємо гроші протягом 30 днів</Text>
            </TextBox>
          </Item>
          <Item>
            <SecureIcon />
            <TextBox>
              <Subtitle>Безпечна оплата онлайн</Subtitle>
              <Text>Приймаємо всі основні кредитні картки</Text>
            </TextBox>
          </Item>
        </List>
      </Wrapper>
    </Section>
  );
};

export default ServicesList;
