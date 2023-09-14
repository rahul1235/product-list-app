import React, { useState } from "react";

const Search = ({ onQuery }) => {
  const [searchValue, setSearchValue] = useState("");
  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
    onQuery(e.target.value);
  };

  return (
    <div className="font-sans text-blackbg-white flex items-center justify-center">
      <div className="border rounded overflow-hidden flex">
        <input
          type="search"
          className="px-4 py-2 w-64"
          value={searchValue}
          onChange={onChangeHandler}
          placeholder="Search your products"
        />
        {/* <button className="flex items-center justify-center px-4 border-l">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Search;
