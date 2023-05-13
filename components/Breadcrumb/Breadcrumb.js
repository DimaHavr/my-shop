import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowIcon,
  HomeIcon,
  IconBox,
  Wrapper,
  Text,
} from "./Breadcrumb.styled";

const Breadcrumb = ({ breadcrumbArr, breadcrumbValue, title }) => {
  const router = useRouter();
  console.log("breadcrumbArr:", breadcrumbArr);
  console.log("breadcrumbValue:", breadcrumbValue);
  const handleClick = () => {
    router.back();
  };

  const matchingObject = breadcrumbArr?.find(
    (obj) => obj?.subCatPath === breadcrumbValue
  );
  console.log(matchingObject);

  return (
    <Wrapper>
      <IconBox>
        <Link href={"/"} passHref>
          <HomeIcon />
        </Link>
        <ArrowIcon onClick={() => handleClick()} />
      </IconBox>
      {matchingObject?.subCatPath ? (
        <Link
          href={`/${matchingObject?.categoryPath}/${matchingObject?.subCatPath}`}
        >
          <Text>{matchingObject ? matchingObject.title : title}</Text>
        </Link>
      ) : (
        <Text>{matchingObject ? matchingObject.title : title}</Text>
      )}
    </Wrapper>
  );
};

export default Breadcrumb;
