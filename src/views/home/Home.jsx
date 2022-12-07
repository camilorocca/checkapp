import React from "react";
import AppForm from "../../components/appForm/AppForm"
const Home = () => {
  return (
    <React.Fragment>
      <AppForm/> 
    </React.Fragment>
  );
};

export default Home;

// const newObject = { 
//  "app_name": "Google Keep - Notes and Lists",
//  "app_icon": "appicon.png",
//  "app_category": "Productivity",
//  "platforms": ["Ios", "Android", "Web"],
//  "app_description": "Quickly capture",
//  "photos": [photo01, photo02]",  
// }

// fetch ("https://retoolapi.dev/wFQamQ/data", {
//   method: "POST",
//   body: JSON.stringify(newObject),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));