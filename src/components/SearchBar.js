import React, { useState } from "react";
import { connect } from "react-redux";
import { search } from "../actions";

const SearchBar = ({ search }) => {
  const handleSearch = (e) => {
    search(e.target.value);
  };
  return (
    <div className="searchbar">
      <input type="text" onChange={handleSearch} placeholder="Search Ships" />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default connect(null, { search })(SearchBar);
