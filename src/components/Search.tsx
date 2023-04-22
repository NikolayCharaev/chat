import React from 'react';

type Props = {};

const Search = (props: Props) => {
  return (
    <div>
      <div className="mb-4 border-b border-gray-400">
        <input
          className="w-full transparent text-white p-2 bg-transparent focus:outline-none "
          type="text"
          placeholder="поиск..."
        />

        <div className="flex gap-3 items-center cursor-pointer hover:bg-search-bg p-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt=""
            className="w-12 h-12 rounded-full bg-slate-500 object-cover"
          />
          <div className="">
            <span>Jane</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
