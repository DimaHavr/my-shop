import { HiArrowLeft } from "react-icons/hi";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #424551;
  font-weight: 700;
  text-transform: uppercase;
  background: none;
  border: none;
  padding: 10px 20px 0;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.05);
    color: 17696a;
  }
`;

export const BackLink = ({ goBack }) => {
  return (
    <StyledButton onClick={goBack}>
      <HiArrowLeft size="24" />
    </StyledButton>
  );
};

export default BackLink;
