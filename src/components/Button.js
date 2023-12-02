import React, { useState } from "react";
import { YOUTUBE_SEARCH_BY_KEY } from "../utils/constants";

const Button = ({ name }) => {
  const [filteredList, setFilteredList] = useState([]);

  const handleButton = async () => {
    const data = await fetch(YOUTUBE_SEARCH_BY_KEY + name);
    const json = data.json();

    setFilteredList(json);
  };

  return (
    <div>
      <button
        className="px-5 py-2 m-2 bg-gray-200 rounded-lg"
        onClick={handleButton}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
