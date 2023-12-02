import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_BY_KEY } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { storeInfo } from "../utils/videosSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestion, setSearchSuggestion] = useState("");

  const searchCache = useSelector((store) => store.search);
  const videosInfo = useSelector((store) => store.videosInfo.info);
  const dispatch = useDispatch();
  useEffect(() => {
    // API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    // make an api call after every key press
    // but if the difference between 2 API cals is < 200ms
    //decline the API call

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    searchListBySuggestion();
  }, [searchSuggestion]);

  const searchListBySuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_BY_KEY + searchSuggestion);
    const json = await data.json();
    dispatch(storeInfo(json.items));
  };
  /**
   * key - i
   * render the component
   * useEffect()
   * start the timer => make api call after 200ms
   *
   * key - ip
   * destroy the component (useEffect return method)
   * render the component
   * useEffect()
   * start the timer => make api call after 200ms
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);

    // update in cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSearch = (suggestion) => {
    console.log(suggestion);

    setSearchSuggestion(suggestion);
    setShowSuggestions(false);
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg items-center h-14 sticky top-0 bg-white z-10">
      <div className="flex col-span-1 items-center ml-4">
        <img
          onClick={toggleMenuHandler}
          className="h-6 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"
          alt="menu"
        />
        <img
          className="h-14 ml-4"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10  text-center -ml-28 h-10">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            className="w-1/2 border py-2 px-4 border-gray-400 rounded-l-full"
          />
          <button className="border py-2 px-4 bg-gray-100 border-gray-400 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[43rem] text-left ml-72 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSearch(suggestion)}
                >
                  <span className="mr-2">🔍 </span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-end mr-4">
        <img
          className="h-10"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
