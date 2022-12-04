import { InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && search !== "") {
      navigate(`/search/${search}`);
    }
  };

  const handleClickIconSearch = () => {
    if (search !== "") {
      navigate(`/search/${search}`);
    }
  };
  return (
    <>
      <SearchIconWrapper sx={{ zIndex: 1000 }} onClick={handleClickIconSearch}>
        <SearchIcon />
      </SearchIconWrapper>
      <InputBase
        onKeyDown={handleKeyDown}
        onChange={handleSearch}
        placeholder="Search..."
        sx={{ paddingLeft: "1.5rem" }}
      />
    </>
  );
};

export default SearchBar;