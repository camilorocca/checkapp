import React from "react";
import { useState } from "react";

import NavBar from "../../components/navBar/NavBar";
import SearchBar from "../../components/searchBar/SearchBar";
import CategoryBox from "../../components/categoryBox/CategoryBox";
import Button from "../../components/button/Button.jsx";
import TextFieldOneLine from "../../components/textFieldOneLine/TextFieldOneLine.jsx";

const Home = () => {
  const [navOrSearch, setNavOrSearch] = useState(false);
  return (
    <React.Fragment>
      {navOrSearch === true ? (
        <NavBar navOrSearch={navOrSearch} setNavOrSearch={setNavOrSearch} />
      ) : (
        <SearchBar navOrSearch={navOrSearch} setNavOrSearch={setNavOrSearch} />
      )}
      <CategoryBox />
      <Button />
      <TextFieldOneLine />
    </React.Fragment>
  );
};

export default Home;
