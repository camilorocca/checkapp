import React, {useState} from 'react'
import NavBar from '../../components/navBar/NavBar';
import SearchBar from '../../components/searchBar/SearchBar';
import SingleApp from '../../components/SingleApp/SingleApp';
import {ContainerSingleApp} from './SingleAppView_styled'

const SingleAppView = () => {
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
            <ContainerSingleApp>
                <SingleApp/>
            </ContainerSingleApp>
    </React.Fragment>
  )
}

export default SingleAppView