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
            <SubTitle>HELP</SubTitle>
            <List>
              <Item>
                <LinkItem href="#">Delivery & returns</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">FAQ</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Track order</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Contacts</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Blog</LinkItem>
              </Item>
            </List>
          </Box>
          <Box>
            <SubTitle>Shop</SubTitle>
            <List>
              <Item>
                <LinkItem href="#">New arrivals</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Trending now</LinkItem>
              </Item>
              <Item>
                <LinkItem href="#">Sales</LinkItem>
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
                  London, UK
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
