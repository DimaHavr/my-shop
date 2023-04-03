import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const StyledPagination = styled(Pagination)`
  & .MuiPagination-ul {
    justify-content: center;
  }

  & .MuiPaginationItem-root {
    color: #17696a;
    border: none;
 */
  }

  & .MuiPaginationItem-page.Mui-selected {
    background-color: #17696a;
    color: #fff;
  
  }
  & .MuiPaginationItem-page {
 */
  }
  & .MuiPaginationItem-page:hover,
  :focus {
    background-color: #17696a;
    color: #fff; opacity: 0.7;
  }
`;

const ProductsPagination = () => {
  return (
    <Stack spacing={2}>
      <StyledPagination
        variant="outlined"
        shape="rounded"
        count={10}
        page={1}
        // onChange={handleChange}
      />
    </Stack>
  );
};

export default ProductsPagination;
