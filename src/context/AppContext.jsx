import React, { createContext, useState } from "react";
import dataJson from "../data/dataApps.json";

const AppContext = createContext();

const initialData = dataJson.data.apps;
const initialSettings = {};

// función para filtrar los objetos que no son "true" retorna un objeto
Object.filter = function (mainObject, filterFunction) {
   return Object.keys(mainObject)
      .filter(function (ObjectKey) {
         return filterFunction(mainObject[ObjectKey]);
      })
      .reduce(function (result, ObjectKey) {
         result[ObjectKey] = mainObject[ObjectKey];
         return result;
      }, {});
};

export const AppProvider = ({ children }) => {

   const [jsonApp, setJsonApp] = useState(initialData);
   const [settingsFilter, setSettingsFilter] = useState(initialSettings);

   // super filtro

   function filtro(apps) {
    let activeSettings = Object.filter(settingsFilter, function (setting) {
      return setting == true;
     });

     activeSettings = Object.keys(activeSettings);

     console.log("active settings", activeSettings)
     
     let result = [];
     console.log("el objeto inicial", result)

     if (activeSettings.length > 0) {
       console.log("la condicional si está funcionando")
        //confirmamos si hay algún ajuste activo
        activeSettings.map((adjust) => {
         console.log("el map tambien")
           //realizamos un mapeo de los ajustes
           apps.forEach((e) => {
              //cada ajuste realiza una busqueda al array para encontrar los que coinciden
              if (e.app_category == adjust) {
                 //en el caso que coíncidan entonces subimos esto al array
                 result.push(e);
              }
           });
        });
        return result;
     }
     result = apps;
     //si el condicional no funciona regresamos el array original
     return result;
  }

   

   const [SingleApp, setSingleApp] = useState();

   const data = {
      jsonApp,
      setSettingsFilter,
      settingsFilter,
      filtro,
      SingleApp,
      setSingleApp,
   };

   return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContext;
