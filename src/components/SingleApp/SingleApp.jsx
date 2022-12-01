import React from "react";
import data from "../../data/dataApps.json";
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
  DescriptionDiv,
} from "./SingleApp_Style";

const SingleApp = () => {
  //Getting Data from Json
  const getData = data.data.apps;
  const changeData = getData.find((element) => {
    return element.app_id === "com.discord";
  });

  return (
    <div>
      {/* {changeData.map((changeData)=>{ */}
      <SectionSingle>
        <AppSingle>
          <AppIcon>
            <Icon src={changeData.app_icon}></Icon>
          </AppIcon>
          <AppInfo>
            <h4>{changeData.app_name}</h4>
            <Category>
              <p>{changeData.app_category}</p>
            </Category>
            <AppPlatforms>
              <p>{changeData.platforms[0]}</p>
              <p>{changeData.platforms[1]}</p>
              <p>{changeData.platforms[2]}</p>
            </AppPlatforms>
            <AppRating>
              <p>✨✨✨✨✨</p>
              <p>{changeData.rating}</p>
            </AppRating>
          </AppInfo>
        </AppSingle>

        <DescriptionDiv>
          <p className="descripton">{changeData.app_description}</p>
        </DescriptionDiv>

        <ImageDiv>
          <DisplayImage src={changeData.photos[0]}></DisplayImage>
          <DisplayImage src={changeData.photos[1]}></DisplayImage>
          <DisplayImage src={changeData.photos[2]}></DisplayImage>
        </ImageDiv>
      </SectionSingle>
      {/* })} */}
    </div>
  );
};
export default SingleApp;
