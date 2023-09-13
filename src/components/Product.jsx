import React from "react";

const Product = ({
  title,
  description,
  category,
  thumbnail,
  rating,
  id,
  brand,
  price,
}) => {
  const loadingUrl = "http://localhost:3000/logo192.png";
  const onLoadHandler = (e) => {
    if (e.target.src === loadingUrl) {
      e.target.src = e.target.getAttribute("data-thumbnail");
    }
  };
  return (
    <li key={id} className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={loadingUrl}
          alt="loading"
          data-thumbnail={thumbnail}
          onLoad={onLoadHandler}
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {title}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {description}
          </p>
          <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
            {category}
          </span>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{brand}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">{`\u20B9${price}`}</p>
      </div>
    </li>
  );
};

export default Product;
