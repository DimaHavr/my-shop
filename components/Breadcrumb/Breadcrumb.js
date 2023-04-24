import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowIcon,
  HomeIcon,
  Item,
  LinkStyled,
  List,
  Wrapper,
  Text,
} from "./Breadcrumb.styled";

const Breadcrumb = ({ breadcrumbArr, breadcrumbValue }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  const matchingObject = breadcrumbArr.find(
    (obj) => obj.path === breadcrumbValue
  );

  return (
    <Wrapper>
      {/* <Link href={"/"} passHref>
        <HomeIcon />
      </Link> */}
      <ArrowIcon onClick={() => handleClick()} />
      <Text>{matchingObject ? matchingObject.title : null}</Text>
    </Wrapper>
  );
};

export default Breadcrumb;
