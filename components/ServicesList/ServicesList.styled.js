import styled from "styled-components";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FaMoneyCheck, FaShippingFast } from "react-icons/fa";

export const Section = styled.section`
  background-color: #e5e8ed;
  padding: 100px 130px;

  @media screen and (max-width: 480px) {
    padding: 50px 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Subtitle = styled.h3`
  font-family: "LatoBold";
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #1e212c;
  width: 210px;
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  color: #787a80;
  text-align: center;
  max-width: 250px;
`;

export const SecureIcon = styled(RiSecurePaymentLine)`
  width: 50px;
  height: 50px;
  fill: #17696a;
`;

export const SupportIcon = styled(MdSupportAgent)`
  width: 50px;
  height: 50px;
  fill: #17696a;
`;

export const MoneyIcon = styled(FaMoneyCheck)`
  width: 50px;
  height: 50px;
  fill: #17696a;
`;

export const DeliveryIcon = styled(FaShippingFast)`
  width: 50px;
  height: 50px;
  fill: #17696a;
`;
