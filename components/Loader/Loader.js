import { ThreeDots } from "react-loader-spinner";
import { LoaderIcon } from "./Loader.styled";
export const Loader = () => {
  return (
    <LoaderIcon>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#c4d600"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </LoaderIcon>
  );
};
export default Loader;
