import {
  ArrowIcon,
  HomeIcon,
  Item,
  LinkStyled,
  List,
  Wrapper,
} from "./Breadcrumb.styled";
import Box from "../Box/Box";

const Breadcrumb = ({ breadcrumbs }) => {
  const myBreadcrumbs = breadcrumbs();

  console.log(myBreadcrumbs);
  return (
    <Wrapper>
      <HomeIcon />
      <List>
        {myBreadcrumbs.map((breadcrumb, index) => (
          <Item key={index}>
            <LinkStyled href={`/${breadcrumb.path}`} passHref>
              <ArrowIcon /> {breadcrumb.title}
            </LinkStyled>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Breadcrumb;
