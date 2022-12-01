import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../views/home/Home';
import Filter from "../views/filter/Filter";
import SingleApp from "../components/SingleApp/SingleApp";

function Router() {

   const [dataApp, setDataApp] = useState(); 

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/filter" element={<Filter/>} />
            <Route path="/singleapp" element={<SingleApp dataApp={dataApp}/>}/> 
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
