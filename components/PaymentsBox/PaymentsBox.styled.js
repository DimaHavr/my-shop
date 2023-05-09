import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 20px;
  gap: 10px;
  width: 500px;
  @media screen and (max-width: 1100px) {
    width: 450px;
  }
  @media screen and (max-width: 1000px) {
    width: 400px;
  }
  @media screen and (max-width: 900px) {
    width: 380px;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: #000;
  animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  @keyframes tracking-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px);
      transform: translateZ(-700px);
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

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;
export const CheckboxBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
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
  color: ${(props) => (props.checked ? "#FFFFFF" : "#17696a")};
`;

export const LogoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 480px) {
    gap: 30px;
  }
`;
