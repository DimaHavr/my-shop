const filterSearch = ({
  router,
  page,
  category,
  sortPrice,
  sortNew,
  sortPopular,
  search,
}) => {
  const path = router.pathname;
  const query = router.query;

  if (category) query.category = category;
  if (page) query.page = page;
  if (search) query.search = search;

  if (sortPrice) query.sortPrice = sortPrice;
  else delete query.sortPrice;

  if (sortNew) query.sortNew = sortNew;
  else delete query.sortNew;

  if (sortPopular) query.sortPopular = sortPopular;
  else delete query.sortPopular;

  router.push({
    pathname: path,
    query: query,
  });
};

export default filterSearch;
