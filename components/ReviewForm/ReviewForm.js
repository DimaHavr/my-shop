import { useState } from "react";
import axios from "axios";
import { Form, Label, Button, Input } from "./ReviewForm.styled";
import getHeaders from "../../hooks/getHeaders";
const ReviewForm = ({ productId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://my-shop-strapi.onrender.com/api/reviews`,
        {
          data: {
            name: name,
            email: email,
            rating: rating,
            comment: comment,
            product: productId,
          },
        },
        getHeaders()
      );

      if (response.status === 200) {
        alert("Review submitted successfully!");
        setName("");
        setEmail("");
        setRating(0);
        setComment("");
      } else {
        alert("Failed to submit review.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit review.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </Label>
      <Label>
        Text
        <Input
          type="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          required
        />
      </Label>
      <Label>
        Rating
        <Input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(event) => setRating(parseInt(event.target.value))}
          required
        />
      </Label>
      <Button type="submit">Submit Review</Button>
    </Form>
  );
};

export default ReviewForm;
