import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SidebarListItem from "./SidebarListItem";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const sidebarItems = [
    "Trending",
    "Shopping",
    "Music",
    "Movies",
    "Live",
    "Gaming",
    "News",
    "Sports",
    "Learning",
    "Fashion $ Beauty",
  ];
  //Early return
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="p-1 m-1 cursor-pointer hover:bg-gray-200 rounded-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="p-1 m-1 cursor-pointer hover:bg-gray-200 rounded-lg">
          {" "}
          Shorts
        </li>
        <li className="p-1 m-1 cursor-pointer hover:bg-gray-200 rounded-lg">
          {" "}
          Subscriptions
        </li>
      </ul>
      <h1 className="pt-5 font-bold">Explore</h1>
      <ul>
        <li>
          {sidebarItems.map((item, index) => (
            <SidebarListItem item={item} key={index} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
