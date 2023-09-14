import React from "react";
import Product from "./Product";
import useFetch from "../hooks/useFetch";
import { getFilteredData } from "../utils/productFilter";
import Loader from "./Loader";

const ProductList = ({ apiUrl, query }) => {
  console.log("inside list");
  let { data: products, loading, error } = useFetch(apiUrl);
  if (loading) {
    return <Loader></Loader>;
  }
  if (error) {
    return (
      <div className="flex items-center justify-center">
        Error: {error.message}
      </div>
    );
  }

  if (query) {
    products = getFilteredData(query, products);
  }

  return (
    <div className="mx-auto max-w-4xl">
      <ul className="divide-y divide-gray-100">
        {(() => {
          if (products.length === 0) {
            return (
              <li className="flex justify-center gap-x-6 py-5">
                <span class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                  Product not found
                </span>
              </li>
            );
          }
        })()}
        {products &&
          products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
      </ul>
    </div>
  );
};

export default ProductList;
