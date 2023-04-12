import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const StarIcon = styled(FaStar)`
  color: ${(props) => (props.isFilled ? "#ffc107" : "#e4e5e9")};
  font-size: 1.5rem;
  margin-right: 0.25rem;
`;

const CommentText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
`;

const ProductReview = ({ rating, comment }) => {
  // Create an array of 5 boolean values to represent the filled and unfilled stars
  const stars = Array(5)
    .fill()
    .map((_, i) => i < rating);

  return (
    <ReviewContainer>
      <StarsContainer>
        {stars.map((isFilled, index) => (
          <StarIcon key={index} isFilled={isFilled} />
        ))}
      </StarsContainer>
      <CommentText>{comment}</CommentText>
    </ReviewContainer>
  );
};

export default ProductReview;
