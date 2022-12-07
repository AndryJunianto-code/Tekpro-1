import { InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    if (e.key === "Enter" && search.replace(/[#\\/?|]/g, "") !== "") {
      navigate(`/search/${search.replace(/[#\\/?|]/g, "")}`);
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
        <SearchIcon
          sx={{
            width: {
              xs: "20px",
              lg: "25px",
            },
          }}
        />
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
