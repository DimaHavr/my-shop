import Link from "next/link";
import Box from "../Box/Box";
import {
  InstagramIcon,
  Wrapper,
  Section,
  List,
  Item,
  Img,
  TextItem,
  TextBox,
  Text,
  Button,
} from "./InstagramBox.styled";

const InstagramBox = () => {
  return (
    <Section>
      <Wrapper>
        <TextBox>
          <Text>Слідкуйте за нами в Instagram</Text>
          <Link href="#">
            <TextItem>@instagram</TextItem>
          </Link>
          <Button>
            <InstagramIcon />
            Підписуйтесь на інстаграм
          </Button>
        </TextBox>
        <List>
          <Item>
            <Img src="/images/instagramBox/image1.webp" />
          </Item>
          <Item>
            <Img src="/images/instagramBox/image2.webp" />
          </Item>
          <Item>
            <Img src="/images/instagramBox/image3.webp" />
          </Item>
        </List>
      </Wrapper>
    </Section>
  );
};

export default InstagramBox;
