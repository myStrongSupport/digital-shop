import React, { useState } from "react";
import { createPortal } from "react-dom";
import classes from "./Search.module.css";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/slices/ui_slice";

const OverLaybg = (props) => {
  return (
    <div
      className={classes["search-modal-overlay"]}
      onClick={props.onToggle}
    ></div>
  );
};

const SearchPart = () => {
  const [filtered, setFiltered] = useState([]);

  return (
    <div className={classes["search-modal"]}>
      <SearchBar setFiltered={setFiltered} />
      <SearchList filteredList={filtered} />
    </div>
  );
};

const overlay = document.getElementById("modal");

const Search = () => {
  const dispatch = useDispatch();

  const searchToggleHandler = () => {
    dispatch(uiActions.toggleSearch());
  };

  return (
    <>
      {createPortal(<OverLaybg onToggle={searchToggleHandler} />, overlay)}
      {createPortal(<SearchPart />, overlay)}
    </>
  );
};

export default Search;
