import React from "react";
import "./Search.css";
import { RiUserSearchFill } from "react-icons/ri";
const Search = () => {
  return (
    <div className="search-main">
      <div className="Search_Wrapper">
        <div className="Search_Bar">
          <input
            type="text"
            id="Bar"
            placeholder="0x000000000000000000000000000000000000"
          />
          <a href="#">
            <RiUserSearchFill />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Search;
