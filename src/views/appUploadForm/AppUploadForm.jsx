import React, {useState} from "react";
import AppForm from "../../components/appForm/AppForm";
import NavBar from "../../components/navBar/NavBar";
import SearchBar from "../../components/searchBar/SearchBar";

const AppUploadForm = () => {
   const [navOrSearch, setNavOrSearch] = useState(false);

   return (
      <React.Fragment>
         
         {navOrSearch == true ? (
               <NavBar
                  navOrSearch={navOrSearch}
                  setNavOrSearch={setNavOrSearch}
               />
            ) : (
               <SearchBar
               inBody={false}
                  navOrSearch={navOrSearch}
                  setNavOrSearch={setNavOrSearch}
               />
            )}
         <AppForm />
      </React.Fragment>
   );
};

export default AppUploadForm;
