import React from "react";
import { useState, useContext } from "react";
import { ContainerFilter, TabFilter } from "./FilterForStars_styled";
import Yeah from "../../assets/svg/YEAH.svg";
import Meh from "../../assets/svg/MEH.svg";
import Booh from "../../assets/svg/BOOH.svg";
import AppContext from "../../context/AppContext";

const FilterForStars = () => {
   const { tabActiveYeah,
       tabActiveMeh,
        tabActiveBooh,
        activeTab } =
      useContext(AppContext);

   return (
      <ContainerFilter>
         <TabFilter isActive={tabActiveYeah} onClick={() => activeTab("yeah")}>
            <img src={Yeah} alt="OptionYeah" />
            <h2>YEAH!</h2>
         </TabFilter>
         <TabFilter isActive={tabActiveMeh} onClick={() => activeTab("meh")}>
            <img src={Meh} alt="OptionYeah" />
            <h2>MEH</h2>
         </TabFilter>
         <TabFilter isActive={tabActiveBooh} onClick={() => activeTab("booh")}>
            <img src={Booh} alt="OptionYeah" />
            <h2 >BOOH!</h2>
         </TabFilter>
      </ContainerFilter>
   );
};

export default FilterForStars;
