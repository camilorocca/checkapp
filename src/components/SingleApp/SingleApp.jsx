import React from "react";

import {
  SectionSingle,
  AppSingle,
  AppIcon,
  Icon,
  AppInfo,
  Category,
  AppPlatforms,
  AppRating,
  ImageDiv,
  DisplayImage,
} from "./SingleApp_Style";

const SingleApp = ({dataApp}) => {

  console.log(dataApp);


  return (
    <div>
      <SectionSingle>
        <AppSingle>
          <AppIcon>
            <Icon ></Icon>
          </AppIcon>
          <AppInfo>
            <h4></h4>
            <Category>
              <p></p>
            </Category>
            <AppPlatforms>
              <p></p>
              <p></p>
              <p></p>
            </AppPlatforms>
            <AppRating>
              <p>✨✨✨✨✨</p>
              <p></p>
            </AppRating>
          </AppInfo>
        </AppSingle>

        <div>
          <p>
          </p>
        </div>

        <ImageDiv>
          <DisplayImage></DisplayImage>
          <DisplayImage></DisplayImage>
          <DisplayImage></DisplayImage>
        </ImageDiv>
      </SectionSingle>
    
    </div>
  );
};
export default SingleApp;
