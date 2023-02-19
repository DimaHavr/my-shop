import styled from 'styled-components';
import { BsFacebook, BsTelegram } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CgCopyright } from 'react-icons/cg';

export const CopyIcon = styled(CgCopyright)`
  width: 25px;
  height: 25px;
  color: #c4d600;
  margin-right: 5px;
`;

export const MapIcon = styled(BiMap)`
  width: 30px;
  height: 30px;
  color: #c4d600;
`;

export const ContactIcon = styled(BsFillTelephoneFill)`
  width: 23px;
  height: 23px;
  color: #c4d600;
`;
export const EmailIcon = styled(MdOutlineMailOutline)`
  width: 27px;
  height: 27px;
  color: #c4d600;
`;

export const InstagramIcon = styled(AiFillInstagram)`
  width: 30px;
  height: 30px;
  fill: #fb3958;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: #c4d600;
  }
`;

export const FacebookIcon = styled(BsFacebook)`
  width: 25px;
  height: 25px;
  fill: #4267b2;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: #c4d600;
  }
`;

export const TelegramIcon = styled(BsTelegram)`
  width: 25px;
  height: 25px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: #c4d600;
  }
`;

export const SectionFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px 20px 15px;
  background-color: #2b2b2b;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;
export const ContactsItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const ContactsLink = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  text-decoration: none;
  color: #fff;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    text-decoration: none;
    color: #c4d600;
  }

  @media (max-width: 480px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.88;
  }
`;

export const IconList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;
export const IconItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const NavLinkLogo = styled.a`
  margin: 10px 0px;
  font-weight: 900;
  font-size: 24px;
  line-height: 1.36;
  max-width: 585px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: #c4d600;
  text-shadow: 0 -6px 18px rgba(0, 0, 0, 0.35);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: tracking-in-contract-bck 1s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;

  &:hover {
    text-decoration: none;
    transform: scale(1.05);
    color: #fff;
  }

  @keyframes tracking-in-contract-bck {
    0% {
      letter-spacing: 1em;
      -webkit-transform: translateZ(400px);
      transform: translateZ(400px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;
