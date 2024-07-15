import React from 'react';

import { PiMagnifyingGlassBold } from "react-icons/pi";

const SearchBar = ({ onSearch, handleQuery, query }) => {

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={handleQuery}
        placeholder="Search for TV shows"
        className="border bg-black border-gray-700 border-4 rounded p-2 w-full shadow-md focus:outline-none text-white"
      />
      <div className='flex justify-end'>
        <button 
          type="submit" 
          className="btn text-xl bg-gradient-to-br from-yellow-400 to-red-600 hover:from-yellow-500 hover:to-red-700 active:from-yellow-500 active:to-red-800 border border-gray-700 border mt-2 p-2 px-8 shadow-md"
        >
          <PiMagnifyingGlassBold style={{color: "white"}}/>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
