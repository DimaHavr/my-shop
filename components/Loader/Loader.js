import { ThreeCircles } from "react-loader-spinner";
import { LoaderIcon } from "./Loader.styled";
export const Loader = () => {
  return (
    <LoaderIcon>
      <ThreeCircles
        height="80"
        width="80"
        radius="9"
        color="#17696a"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </LoaderIcon>
  );
};
export default Loader;
