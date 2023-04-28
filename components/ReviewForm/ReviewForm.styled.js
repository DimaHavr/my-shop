import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-bottom: 16px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #0070f3;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
