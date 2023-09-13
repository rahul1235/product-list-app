export const getFilteredData = (searchTerm, data) => {
  return data.filter((eachProduct) => {
    return eachProduct.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
};
