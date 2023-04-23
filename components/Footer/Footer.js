import Link from "next/link";
import {
  SectionFooter,
  FooterContainer,
  ContactsWrapper,
  List,
  IconList,
  Item,
  LinkItem,
  SubTitle,
  InstagramIcon,
  FacebookIcon,
  TelegramIcon,
  MapIcon,
  ContactIcon,
  EmailIcon,
} from "./Footer.styled";
import Box from "../Box/Box";

const Footer = () => {
  return (
    <SectionFooter>
      <FooterContainer>
        <ContactsWrapper>
          <Box>
            <SubTitle>Допомога</SubTitle>
            <List>
              <Item>
                <LinkItem href="#">Доставка та повернення</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">FAQ</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Відстежити замовлення</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Контакти</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Блог</LinkItem>
              </Item>
            </List>
          </Box>
          <Box>
            <SubTitle>Магазин</SubTitle>
            <List>
              <Item>
                <LinkItem href="#">Нові надходження</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Зараз в тренді</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Sale до -50%</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Brands</LinkItem>
              </Item>
            </List>
          </Box>
          <Box>
            <SubTitle>Get in touch</SubTitle>
            <List>
              <Item>
                <MapIcon />
                <LinkItem
                  href="https://goo.gl/maps/gLwHEKa1ZTKYaj6F9"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Київ, Україна
                </LinkItem>
              </Item>
              <Item>
                <ContactIcon />
                <LinkItem href="tel:+380961111111">+38 097 77 77 77</LinkItem>
              </Item>
              <Item>
                <EmailIcon />
                <LinkItem href="mailto:email@gmail.com">
                  email@gmail.com
                </LinkItem>
              </Item>
            </List>
            <IconList>
              <Item>
                <Link href="https://www.instagram.com/">
                  <InstagramIcon />
                </Link>
              </Item>
              <Item>
                <Link href="https://www.facebook.com/">
                  <FacebookIcon />
                </Link>
              </Item>
              <Item>
                <Link href="https://web.telegram.org/z/">
                  <TelegramIcon />
                </Link>
              </Item>
            </IconList>
          </Box>
        </ContactsWrapper>
      </FooterContainer>
    </SectionFooter>
  );
};

export default Footer;
