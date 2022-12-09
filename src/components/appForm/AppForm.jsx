import React, { useState, useContext } from "react";

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
} from "./AppForm_Styled";
import Button from "../button/Button";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";
import { MainButton } from "../button/Button_styled";

const AppForm = () => {
   const [selectPlatform, setSelectPlatform] = useState(false);
   const [selectCategory, setSelectCategory] = useState(false);
   const descriptionApp = document.getElementById("description");

   const [category, setCategory] = useState();

   const { jsonApp } = useContext(AppContext);

   const [urlImage, setUrlImage] = useState("")

   const nameApp = document.getElementById("nameApp");





   const img = document.getElementById("img")
   const url = document.getElementById("url")

   function sendImage (e){
      console.log("hola",e)
      const formdata = new FormData()
            formdata.append("image", e)
            fetch("https://api.imgur.com/3/image/", {
                method: "post",
                headers: {
                    Authorization: "Client-ID 4e4338d6da0fe92"
                },
                body: formdata
            }).then(data => data.json())
            .then(data => {
                setUrlImage(data.data.link)
            })
   }
   sendImage()


   function uploadNewApp() {


      let newObject = {
         app_id: `${nameApp.value}.com`,
         app_name: `${nameApp.value}`,
         app_category: category,
         num_downloads: "1,000,000,000+",
         app_description:descriptionApp.value,
         price: 0,
         rating: 0,
         photos: [
         ],
         app_icon:urlImage,
         trailer: null,
         platforms: ["Ios", "Android", "Web"],
         reviews: [
         ],
         new_app:true,
      };
      console.log("objeto para enviar", newObject);
      jsonApp.push(newObject)
      console.log("json actualizado " , jsonApp)

   }
   const allCategories = [...new Set(jsonApp.map((app) => app.app_category))];

   return (
      <React.Fragment>
         <ContainerForm>
            <TextField placeholder="Your App name" id="nameApp" />
            <UploadAppContainer>
               {/* <div>
                  <BiImageAlt />
               </div> */}
               <input type="file" id="file" onChange={(e)=> sendImage(e.target.files[0])} />
               <img src={urlImage} id="img"></img>
            </UploadAppContainer>
            <Container>
               <DropDownContainer>
                  <DropDownBox>
                     <DropDownButton
                        onClick={() => setSelectPlatform(!selectPlatform)}
                     >
                        <p>Categories</p>
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
                  {/* <DropDownBox>
                     <DropDownButton
                        onClick={() => setSelectCategory(!selectCategory)}
                     >
                        <p>plataformas</p>
                        {selectCategory === true ? (
                           <MdOutlineArrowDropUp />
                        ) : (
                           <MdOutlineArrowDropDown />
                        )}
                     </DropDownButton>

                     <DropDownMenu>
                        {selectCategory === true ? (
                           <DropDownMenuContainer>
                              <DropDownItem></DropDownItem>
                              <DropDownItem>
                                 <input
                                    type="checkbox"
                                    id="cbox1"
                                    value="firstCheckbox"
                                 />
                                 iOS
                              </DropDownItem>
                              <DropDownItem>
                                 <input
                                    type="checkbox"
                                    id="cbox1"
                                    value="firstCheckbox"
                                 />
                                 Android
                              </DropDownItem>
                              <DropDownItem>
                                 <input
                                    type="checkbox"
                                    id="cbox1"
                                    value="firstCheckbox"
                                 />
                                 webkit
                              </DropDownItem>
                           </DropDownMenuContainer>
                        ) : null}
                     </DropDownMenu>
                  </DropDownBox> */}
               </DropDownContainer>
            </Container>
            <AppDescription>
               <textarea
                  placeholder={"Describe the app here..."}
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

export default AppForm;
