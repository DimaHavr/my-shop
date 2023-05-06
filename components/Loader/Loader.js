import { LoaderStyled, Spinner } from "./Loader.styled";
export const Loader = ({ loading }) => {
  return (
    <LoaderStyled active={loading}>
      <Spinner />
    </LoaderStyled>
  );
};
export default Loader;
