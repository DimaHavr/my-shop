import Box from "../Box/Box";

const CategoriesList = ({ categories }) => {
  return (
    <Box>
      <ul>
        {categories?.map(({ name, _id }) => {
          <li key={_id}>
            <h2>{name}</h2>;
          </li>;
        })}
      </ul>
    </Box>
  );
};

export default CategoriesList;
