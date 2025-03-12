"use client";
import React, { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
        <FiSearch className="mr-2" />
        <input
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
          type="text"
          placeholder="search"
          className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
        />
        <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
          <FiCommand /> K
        </span>
      </div>

      {/* Example: Conditionally render something based on `open` */}
      {open && (
        <div className="mt-2 p-2 bg-white rounded shadow">
          Search dropdown or modal
        </div>
      )}
    </>
  );
};

export default SearchBar;