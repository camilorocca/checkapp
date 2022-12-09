import React, { useState, useContext } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import AppContext from "../../context/AppContext";
import {
   TextField,
   UploadAppContainer,
   ContainerForm,
   Container,
   DropDownContainer,
   DropDownBox,
   DropDownButton,
   DropDownMenu,
   DropDownMenuContainer,
   DropDownItem,
   AppDescription,
   ContainerScreens,
} from "../../components/appForm/AppForm_Styled";
import { MainButton } from "../../components/button/Button_styled";
import NavBar from "../../components/navBar/NavBar"; 
import {SelectAppModal} from './AppEditForm_styled';
import SearchBar from "../../components/searchBar/SearchBar";

const AppEditForm = () => {
   const [selectPlatform, setSelectPlatform] = useState(false);
   const [selectCategory, setSelectCategory] = useState(false);
   const descriptionApp = document.getElementById("description");
   const [navOrSearch, setNavOrSearch] = useState(false);
   const [modal, setModal] = useState(true)
   const [appSelected, setAppSelected] = useState(false)


   function selectApp (app){
    setModal(false)
    setAppSelected(app)
   }

   const [category, setCategory] = useState();

   const { jsonApp , setJsonApp } = useContext(AppContext);

   const [urlImage, setUrlImage] = useState("");

   const nameApp = document.getElementById("nameApp");

   const img = document.getElementById("img");
   const url = document.getElementById("url");

   function sendImage(e) {
//       console.log("hola", e);
//       const formdata = new FormData();
//       formdata.append("image", e);
//       fetch("https://api.imgur.com/3/image/", {
//          method: "post",
//          headers: {
//             Authorization: "Client-ID 4e4338d6da0fe92",
//          },
//          body: formdata,
//       })
//          .then((data) => data.json())
//          .then((data) => {
//             setUrlImage(data.data.link);
//          });
   }
   sendImage();

   function uploadNewApp() {
      let newObject = {
         app_id: `${nameApp.value}.com`,
         app_name: `${nameApp.value}`,
         app_category: category,
         num_downloads: "1,000,000,000+",
         app_description: descriptionApp.value,
         price: 0,
         rating: 0,
         photos: [],
         app_icon: urlImage,
         trailer: null,
         platforms: ["Ios", "Android", "Web"],
         reviews: [],
      };
      let newArray = jsonApp.map(app =>{
        console.log("nombre de la apo", nameApp.value)
        if(appSelected === app.app_name){
            console.log("name app ", nameApp.value)
            app = newObject
            return app
        }
        return app
      });
      console.log("este es el nuevo arreglo",newArray);
      setJsonApp(newArray);
      console.log("este es el nuevo json", jsonApp);
   }
   const allCategories = [...new Set(jsonApp.map((app) => app.app_category))];

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
         <SelectAppModal isOpen={modal}>
            Selet YOUR App
            <ul>
                {jsonApp.map(app =>{
                    if(app.new_app === true){
                        return <li  onClick={()=>selectApp(app.app_name)}>{app.app_name}</li>
                    }
                })}
            </ul>
            <button onClick={()=> setModal(!false)}></button>
         </SelectAppModal>
         <ContainerForm>
            <TextField placeholder="New App Name" id="nameApp" />
            <UploadAppContainer>
               <input
                  type="file"
                  id="file"
                  onChange={(e) => sendImage(e.target.files[0])}
               />
               <img src={urlImage} id="img"></img>
            </UploadAppContainer>
            <Container>
               <DropDownContainer>
                  <DropDownBox>
                     <DropDownButton
                        onClick={() => setSelectPlatform(!selectPlatform)}
                     >
                        <p>New Category</p>
                        {selectPlatform === true ? (
                           <MdOutlineArrowDropUp />
                        ) : (
                           <MdOutlineArrowDropDown />
                        )}
                     </DropDownButton>

                     <DropDownMenu>
                        {selectPlatform === true ? (
                           <DropDownMenuContainer>
                              <DropDownItem></DropDownItem>

                              {allCategories.map((category) => {
                                 return (
                                    <DropDownItem>
                                       <input
                                          type="checkbox"
                                          value={category}
                                          onClick={() => setCategory(category)}
                                       />
                                       {category}
                                    </DropDownItem>
                                 );
                              })}
                           </DropDownMenuContainer>
                        ) : null}
                     </DropDownMenu>
                  </DropDownBox>
               </DropDownContainer>
            </Container>
            <AppDescription>
               <textarea
                  placeholder={"Describe the app again here..."}
                  id="description"
               ></textarea>
            </AppDescription>
            <Container>
               <MainButton onClick={() => uploadNewApp()}> Upload</MainButton>
            </Container>
         </ContainerForm>
      </React.Fragment>
   );
};

export default AppEditForm;
