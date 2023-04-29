import styled from "styled-components";
import { FaRegStar, FaStar } from "react-icons/fa";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StarInput = styled.input`
  display: none;
`;

export const StarIcon = styled(FaRegStar)`
  width: 30px;
  height: 30px;
  color: #bbb;
  cursor: pointer;
  transition: color 0.2s;
  animation: ${({ rating }) =>
    rating && "puff-out-center 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)"};
  &:hover,
  &:focus {
    color: #ffc107;
  }
  @keyframes puff-out-center {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
  }
`;

export const GoldStarIcon = styled(FaStar)`
  width: 30px;
  height: 30px;
  color: #ffc107;
  cursor: pointer;
  transition: color 0.2s;
  animation: ${({ rating }) =>
    rating &&
    "puff-in-center 0.4s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;"};
  &:hover,
  &:focus {
    color: #ffc107;
  }
  @keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;
export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ showForm }) =>
    showForm
      ? "swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both"
      : "swing-out-top-bck 0.45s cubic-bezier(0.600, -0.280, 0.735, 0.045) both"};

  @keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }

  @keyframes swing-out-top-bck {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
    100% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 300px;
  padding: 8px;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

export const CommentInput = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  vertical-align: top;
  word-wrap: break-word;
`;

export const Button = styled.button`
  width: 220px;
  font-family: "LatoBold";
  font-size: 16px;
  line-height: 52px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #fff;
  padding: 0px 40px;
  gap: 10px;
  height: 52px;
  border: 1px solid #17696a;
  border-radius: 4px;
  background-color: #17696a;
  margin-top: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  &:hover,
  &:focus {
    transform: scale(1.02);
  }
  @media screen and (max-width: 488px) {
    width: 100%;
  }
`;
