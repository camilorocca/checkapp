import React from "react";
import { useState } from "react";

import NavBar from "../../components/navBar/NavBar";
import SearchBar from "../../components/searchBar/SearchBar";

const Home = () => {
   const [navOrSearch, setNavOrSearch] = useState(false);
   return (
      <React.Fragment>
         {navOrSearch == true ? (
            <NavBar navOrSearch={navOrSearch} setNavOrSearch={setNavOrSearch} />
         ) : (
            <SearchBar
               navOrSearch={navOrSearch}
               setNavOrSearch={setNavOrSearch}
            />
         )}
      </React.Fragment>
   );
};

export default Home;
