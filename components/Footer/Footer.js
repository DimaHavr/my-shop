import {
  SectionFooter,
  FooterContainer,
  ContactsWrapper,
  NavLinkLogo,
  InstagramIcon,
  FacebookIcon,
  TelegramIcon,
  ContactsList,
  ContactsItem,
  ContactsLink,
  MapIcon,
  ContactIcon,
  EmailIcon,
  IconItem,
  IconList,
  CopyIcon,
} from "./Footer.styled";
import Box from "../Box/Box";

const Footer = () => {
  return (
    <SectionFooter>
      <NavLinkLogo href="#header">My-shop</NavLinkLogo>
      <FooterContainer>
        <ContactsWrapper>
          <ContactsList>
            <ContactsItem>
              <MapIcon />
              <ContactsLink
                href="https://goo.gl/maps/gLwHEKa1ZTKYaj6F9"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Івано-Франківськ
              </ContactsLink>
            </ContactsItem>
            <ContactsItem>
              <ContactIcon />
              <ContactsLink href="tel:+380961111111">
                +38 097 77 77 77
              </ContactsLink>
            </ContactsItem>
            <ContactsItem>
              <EmailIcon />
              <ContactsLink href="mailto:email@gmail.com">
                email@gmail.com
              </ContactsLink>
            </ContactsItem>
          </ContactsList>
          <IconList>
            <IconItem>
              <a href="https://www.instagram.com/">
                <InstagramIcon />
              </a>
            </IconItem>
            <li>
              <a href="https://www.facebook.com/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://web.telegram.org/z/">
                <TelegramIcon />
              </a>
            </li>
          </IconList>
        </ContactsWrapper>
        <Box
          as="div"
          display="flex"
          alignItems="center"
          marginTop="20px"
          marginBottom="10px"
        >
          <CopyIcon />
          <ContactsLink
            href="https://github.com/DimaHavr"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            DimaHavr
          </ContactsLink>
        </Box>
      </FooterContainer>
    </SectionFooter>
  );
};

export default Footer;
