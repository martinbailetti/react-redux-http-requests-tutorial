import React from "react";

import BasicTemplate from "../components/templates/basic/BasicTemplate";
import ProductsList from "../features/products/ProductsList";

const Products = () => {
  return (
    <BasicTemplate>
      <ProductsList />
    </BasicTemplate>
  );
};

export default Products;
