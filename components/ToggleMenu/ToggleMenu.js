import { useState } from "react";
import {
  ToggleMenuButton,
  ToggleMenuBtnBox,
  ToggleMenuWrapper,
  ContentBox,
  Text,
  RegStarIcon,
  StarIcon,
} from "./ToggleMenu.styled";
import ReviewForm from "../ReviewForm/ReviewForm";

const ToggleMenu = ({ productReviews, desc, productId }) => {
  const [activeTab, setActiveTab] = useState("description");
  const getStars = ({ rating }) => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starArray.push(<StarIcon key={i} />);
      } else {
        starArray.push(<RegStarIcon key={i} />);
      }
    }
    console.log(starArray);
    return starArray;
  };

  return (
    <ToggleMenuWrapper>
      <ToggleMenuBtnBox>
        <ToggleMenuButton
          active={activeTab === "description"}
          onClick={() => setActiveTab("description")}
        >
          Опис
        </ToggleMenuButton>
        <ToggleMenuButton
          active={activeTab === "features"}
          onClick={() => setActiveTab("features")}
        >
          Характеристики
        </ToggleMenuButton>
        <ToggleMenuButton
          active={activeTab === "reviews"}
          onClick={() => setActiveTab("reviews")}
        >
          Відгуки ({productReviews.length})
        </ToggleMenuButton>
      </ToggleMenuBtnBox>

      {activeTab === "description" && (
        <ContentBox active={activeTab}>
          <Text>{desc}</Text>
        </ContentBox>
      )}
      {activeTab === "features" && (
        <ContentBox active={activeTab}>
          <Text>features</Text>
        </ContentBox>
      )}
      {activeTab === "reviews" && (
        <ContentBox active={activeTab}>
          <ul>
            {productReviews.map(
              ({ id, attributes: { comment, rating, name } }) => (
                <li key={id}>
                  <Text>Name: {name}</Text>
                  <Text>{comment}</Text>
                  <Text>{getStars({ rating })}</Text>
                </li>
              )
            )}
          </ul>
          <ReviewForm productId={productId} />
        </ContentBox>
      )}
    </ToggleMenuWrapper>
  );
};
export default ToggleMenu;
