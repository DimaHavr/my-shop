import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import {
  Form,
  Label,
  Button,
  Input,
  CommentInput,
  Overlay,
  RatingContainer,
  StarInput,
  StarIcon,
  GoldStarIcon,
} from "./ReviewForm.styled";
import getHeaders from "../../hooks/getHeaders";

const ReviewForm = ({ productId, onClose, showForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const onCloseModal = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onCloseModal);

    return () => {
      window.removeEventListener("keydown", onCloseModal);
    };
  }, [onClose]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (!rating) {
        toast.error(`Оберіть оцінку`, {
          style: {
            borderRadius: "10px",
            background: "#fff",
            color: "#333",
          },
        });
        return;
      }
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
        toast.success(`Відгук надіслано. Дякуємо!`, {
          style: {
            borderRadius: "10px",
            background: "#fff",
            color: "#333",
          },
        });
        setName("");
        setEmail("");
        setRating(0);
        setComment("");
        onClose();
      } else {
        toast.error(`Помилка відправлення.`, {
          style: {
            borderRadius: "10px",
            background: "#grey",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(`Помилка відправлення.`, {
        style: {
          borderRadius: "10px",
          background: "#grey",
          color: "#fff",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <Overlay showForm={showForm}>
      <Form onSubmit={handleSubmit}>
        <Label>Ім'я</Label>
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <Label>Електронна пошта</Label>
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <Label>Комментар</Label>
        <CommentInput
          type="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <RatingContainer>
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1;
            const Star =
              ratingValue <= rating ? (
                <GoldStarIcon rating={rating} />
              ) : (
                <StarIcon rating={rating} />
              );

            return (
              <label key={i}>
                <StarInput
                  type="checkbox"
                  value={ratingValue}
                  onClick={() => handleStarClick(ratingValue)}
                />
                {Star}
              </label>
            );
          })}
        </RatingContainer>
        <Button disabled={isLoading} type="submit">
          {isLoading ? (
            <ThreeDots
              height="40"
              width="80"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ justifyContent: "center" }}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Надіслати відгук"
          )}
        </Button>
      </Form>
    </Overlay>
  );
};

export default ReviewForm;
