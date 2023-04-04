import { ThreeCircles } from "react-loader-spinner";
import { LoaderIcon } from "./Loader.styled";
import Box from "../Box/Box";
export const Loader = () => {
  return (
    <Box>
      <LoaderIcon>
        <ThreeCircles
          height="180"
          width="180"
          radius="9"
          color="#17696a"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </LoaderIcon>
    </Box>
  );
};
export default Loader;
