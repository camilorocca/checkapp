import React, { useState, useEffect } from "react";
import {
   ContainerApps,
   ContainerFilter,
   Banner,
   Cards,
} from "./ContainerApps_styled";
import data from "../../data/dataApps.json";
import AppCard from "../appCard/AppCard";
import DetailedFilter from "../detailedFilter/DetailedFilter";

const Container_Apps = ({ setSettingsFilter, settignsFilter }) => {
   console.log("settingsFIlter", settignsFilter);
   let DataApps = data.data.apps;

   function filtro(arr) {
      let result = arr;
      console.log("settings in function", settignsFilter.productivity);
      if(settignsFilter.productivity == "true"){
        result = arr.filter( a => a.app_category == "Productivity")
      }
      if(settignsFilter.entertainment == "true"){
        result = arr.filter( a => a.app_category == "Entertainment")
      }
      if(settignsFilter.social == "true"){
        result = arr.filter( a => a.app_category == "Social")
      }
      if(settignsFilter.photography == "true"){
        result = arr.filter( a => a.app_category == "Photography")
      }
      if(settignsFilter.lifeStyle == "true"){
        result = arr.filter( a => a.app_category == "Lifestyle")
      }
      if(settignsFilter.tools == "true"){
        result = arr.filter( a => a.app_category == "Tools")
      }
      if(settignsFilter.videoEditor == "true"){
        result = arr.filter( a => a.app_category == "Video Players & editors")
      }

      return result;
      // let result = arr.filter( a => a.rating == 4)
   }
   console.log("filtro", filtro(DataApps));

   return (
      <ContainerApps>
         <ContainerFilter>
            <DetailedFilter
               setSettingsFilter={setSettingsFilter}
            ></DetailedFilter>
         </ContainerFilter>
         <Banner>
            <h2>Today algo</h2>
         </Banner>
         <Cards>
            {filtro(DataApps).map((i) => {
               return <AppCard dataApp={i} key={i.app_id} />;
            })}
         </Cards>
      </ContainerApps>
   );
};

export default Container_Apps;
