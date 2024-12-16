import React from "react";

const SearchButton = ({
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md 
                  ${
                    disabled
                      ? "bg-gray-300 cursor-not-allowed"
                      : "hover:bg-blue-600"
                  }
                  `}
    >
      Search
    </button>
  );
};

export default SearchButton;
