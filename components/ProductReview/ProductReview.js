import React from "react";
import {
  ReviewContainer,
  RatingContainer,
  CommentContainer,
  RegStarIcon,
  StarIcon,
} from "./ProductReview.styled";
const ProductReview = ({ productReviews, productReviews1 }) => {
  console.log(productReviews1);
  const totalReviews = productReviews.length;
  let totalStars = 0;

  productReviews.forEach((review) => {
    totalStars += review.rating;
  });

  const averageRating = totalStars / totalReviews;

  const starArray = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= averageRating) {
      starArray.push(<StarIcon key={i} />);
    } else {
      starArray.push(<RegStarIcon key={i} />);
    }
  }

  return (
    <ReviewContainer>
      <RatingContainer>{starArray}</RatingContainer>
      <CommentContainer>({totalReviews})</CommentContainer>
    </ReviewContainer>
  );
};

export default ProductReview;
