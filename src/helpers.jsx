export const findCategoryById = (categories, categoryId) => categories
  .find(category => category.id === categoryId) || null;

export const findOwnerById = (users, ownerId) => users
  .find(user => user.id === ownerId) || null;

export const filterProductsByUserId = (allProducts, userId) => {
  if (!userId) {
    return allProducts;
  }

  return allProducts.filter(product => product.user.id === userId);
};

export const filterProducts = (allProducts, userId, searchQuery) => {
  const productsOfUser = filterProductsByUserId(allProducts, userId);

  const normalizedSearchQuery = searchQuery.toLowerCase();

  return productsOfUser.filter((product) => {
    const stringToSearch = `${product.name.toLowerCase()}`;

    return stringToSearch.includes(normalizedSearchQuery);
  });
};
