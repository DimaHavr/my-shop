import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

export const Section = styled.section`
  background-color: #f4f5f7;
  padding: 100px 130px;
  @media screen and (max-width: 680px) {
    padding: 50px 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 1280px) {
    align-items: center;
    justify-content: center;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`;

export const Img = styled.img`
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-family: "LatoRegular";
  font-size: 20px;
  line-height: 30px;
  color: #787a80;
`;

export const TextItem = styled.p`
  font-family: "LatoBold";
  font-style: normal;
  font-weight: 900;
  font-size: 46px;
  line-height: 60px;
  text-algin: flex-start;
  color: #1e212c;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;
export const CheckboxBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin: 32px 0;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d7dadd;
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? "#17696A" : "none")};
`;

export const CheckboxInput = styled.input`
  display: none;

  &:checked + label {
    background: #17696a;
    color: #ffffff;
  }
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
  font-family: "LatoBold";
  font-size: 14px;
  line-height: 21px;
  padding: 6px 16px;
  text-align: center;
  border-radius: 4px;
  color: ${(props) => (props.checked ? "#FFFFFF" : "#787A80")};
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;

export const InputButtonBox = styled.div`
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  margin-bottom: 24px;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #d7dadd;
  border-radius: 4px 0px 0px 4px;
  width: 350px;
  height: 52px;
  text-indent: 15px;
  &:placeholder {
    font-family: "LatoRegular";
    font-size: 16px;
    line-height: 26px;

    color: #9a9ca5;
  }

  @media screen and (max-width: 768px) {
    width: 260px;
  }
  @media screen and (max-width: 480px) {
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  font-family: "LatoBold";
  font-size: 16px;
  line-height: 52px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
  padding: 0px 40px;
  gap: 10px;
  height: 52px;
  border: 1px solid #17696a;
  background: #17696a;
  border-radius: 0px 4px 4px 0px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    color: #fff;
    background-color: #17696a;
  }
  @media screen and (max-width: 620px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 480px) {
    border-radius: 4px;
  }
`;

export const CheckIcon = styled(BiCheck)`
  width: 25px;
  height: 27px;
  color: #ffffff;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

export const CheckboxContainerConfirm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CheckboxLabelConfirm = styled.label`
  cursor: pointer;
  font-family: "LatoRegular";
  font-size: 16px;
  line-height: 26px;
  color: #424551;
  background-color: ${(props) => (props.checked ? "#17696A" : "none")};
  border: ${(props) => (!props.checked ? "1px solid #d7dadd" : "none")};
  width: 26px;
  height: 26px;
  text-align: center;
  border-radius: 4px;
`;

export const CheckboxConfirmText = styled.p`
  font-family: "LatoRegular";
  font-size: 16px;
  line-height: 26px;
  color: #424551;
  @media screen and (max-width: 480px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

export const CheckboxInputConfirm = styled.input`
  display: none;

  &:checked + label {
    background: #17696a;
    color: #ffffff;
  }
`;
