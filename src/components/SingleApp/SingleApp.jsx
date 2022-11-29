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

const SingleApp = () => {
  return (
    <div>
   
      return<SectionSingle>
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

        <div className="des">
          <p>
            Lorem fistrum qué dise usteer quietooor papaar papaar. Pecador ese
            que llega tiene musho peligro no puedor pecador. Me cago en tus
            muelas está la cosa muy malar de la pradera al ataquerl benemeritaar
            diodeno pupita mamaar. Llevame al sircoo quietooor pupita diodeno
            mamaar apetecan me cago en tus muelas. Amatomaa diodenoo no puedor
            pecador diodenoo qué dise usteer.
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
