export const selectLoadingProducts = (state) => state.products.loading;

export const selectAllProducts = (state) => state.products.products;

export const selectProductsError = (state) => state.products.console.error;
