import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setquery } from "../../redux/employeeSlice";
import "./search.css";
const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter Employee details..."
        onChange={(e) => dispatch(setquery(e.target.value))}
      />
    </div>
  );
};

export default Search;
