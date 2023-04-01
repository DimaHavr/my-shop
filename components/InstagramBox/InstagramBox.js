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
          <Text>Follow us on Instagram</Text>
          <Link href="#">
            <TextItem>@createx_store</TextItem>
          </Link>
          <Button>
            <InstagramIcon />
            Follow instagram
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
