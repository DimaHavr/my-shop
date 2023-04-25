import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowIcon,
  HomeIcon,
  IconBox,
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
      <IconBox>
        <Link href={"/"} passHref>
          <HomeIcon />
        </Link>
        <ArrowIcon onClick={() => handleClick()} />
      </IconBox>
      <Text>{matchingObject ? matchingObject.title : null}</Text>
    </Wrapper>
  );
};

export default Breadcrumb;
