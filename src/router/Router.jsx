import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../views/home/Home';
import Filter from "../views/filter/Filter";
import AppUploadForm from "../views/appUploadForm/AppUploadForm";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/loadForm" element={<AppUploadForm/>} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
