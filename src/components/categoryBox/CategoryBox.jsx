import React, { useContext } from "react";
import { ContainerCategoryBox, RowCategoryBox } from "./CategoryBox_styled";
import { VscFlame } from "react-icons/vsc";
import { Link } from "react-router-dom";
import dataApps from "../../data/dataApps.json";
import AppContext from "../../context/AppContext";

const CategoryBox = () => {
   const { setSettingsFilter } = useContext(AppContext);

   const allCategories = [
      ...new Set(dataApps.data.apps.map((app) => app.app_category)),
   ];

   function configSettings(category) {
      let addCategory = category;

      let newObjeto = `{"${Object.values(addCategory)}" : true }`;
      
      setSettingsFilter(JSON.parse(newObjeto));
   }

   return (
      <ContainerCategoryBox>
         <RowCategoryBox>
            {allCategories.map((category) => {
               return (
                  <Link to="/filter">
                     <button onClick={() => configSettings({ category })}>
                        <VscFlame />
                        {category}
                     </button>
                  </Link>
               );
            })}
         </RowCategoryBox>
      </ContainerCategoryBox>
   );
};

export default CategoryBox;
