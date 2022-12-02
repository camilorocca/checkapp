import React from "react";
import {
   GeneralDiv,
   IconImg,
   InfoApp,
   Platforms,
   Rating,
} from "./AppCard_styled";
import { AiFillStar } from "react-icons/ai";

const AppCard = ({ dataApp }) => {
   return (
      <React.Fragment>
         <GeneralDiv>
            <IconImg>
               <img src={dataApp.app_icon} />
            </IconImg>
            <InfoApp>
               <h4>{dataApp.app_name}</h4>
               <p>{dataApp.app_category}</p>
               <Platforms>
                  <p>{dataApp.platforms[0]}</p>
                  <p>{dataApp.platforms[1]}</p>
                  <p>{dataApp.platforms[2]}</p>
               </Platforms>
               <Rating>
                  {dataApp.rating == 5 ? <p>{dataApp.rating}<AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </p>: null}
                  {dataApp.rating == 4 ? <p>{dataApp.rating}<AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </p>: null}
                  {dataApp.rating == 3 ? <p>{dataApp.rating}<AiFillStar /><AiFillStar /><AiFillStar /> </p>: null}
                  {dataApp.rating == 2 ? <p>{dataApp.rating}<AiFillStar /><AiFillStar /> </p>: null}
                  {dataApp.rating == 1 ? <p>{dataApp.rating}<AiFillStar /> </p>: null}
               </Rating>
            </InfoApp>
         </GeneralDiv>
      </React.Fragment>
   );
};

export default AppCard;
