import { useState } from "react";
import {
  ToggleMenuButton,
  ToggleMenuBtnBox,
  ToggleMenuWrapper,
  ContentBox,
  Text,
  RegStarIcon,
  StarIcon,
  Button,
  ItemBox,
  Item,
  List,
  TextComment,
  TextDesc,
} from "./ToggleMenu.styled";
import ReviewForm from "../ReviewForm/ReviewForm";

const ToggleMenu = ({ productReviews, desc, productId }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [showForm, setShowForm] = useState(false);

  const handleToggleModal = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

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
          <TextDesc>{desc}</TextDesc>
        </ContentBox>
      )}
      {activeTab === "features" && (
        <ContentBox active={activeTab}>
          <Text>features</Text>
        </ContentBox>
      )}
      {activeTab === "reviews" && (
        <ContentBox active={activeTab}>
          <List>
            {productReviews.map(
              ({ id, attributes: { comment, rating, name } }) => (
                <Item key={id}>
                  <ItemBox>
                    <Text> {name}</Text>
                    <Text>{getStars({ rating })}</Text>
                  </ItemBox>
                  <TextComment>{comment}</TextComment>
                </Item>
              )
            )}
          </List>
          <Button onClick={handleToggleModal}>
            {showForm ? "Закрити форму" : "Залишити відгук"}
          </Button>
          {showForm && (
            <ReviewForm
              productReviews={productReviews}
              productId={productId}
              onClose={handleToggleModal}
              showForm={showForm}
            />
          )}
        </ContentBox>
      )}
    </ToggleMenuWrapper>
  );
};
export default ToggleMenu;
