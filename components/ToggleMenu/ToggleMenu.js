import { useState } from "react";
import {
  ToggleMenuButton,
  ToggleMenuBtnBox,
  ToggleMenuWrapper,
  ContentBox,
  Text,
} from "./ToggleMenu.styled";

const ToggleMenu = ({ productReviews, desc }) => {
  const [activeTab, setActiveTab] = useState("description");

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
          {/* <ul>
            {productReviews.map((review) => (
              <li key={review.id}>
                <Text>{review.comment}</Text>
                <Text>Rating: {review.rating}/5</Text>
              </li>
            ))}
          </ul> */}
          Review
        </ContentBox>
      )}
    </ToggleMenuWrapper>
  );
};
export default ToggleMenu;
