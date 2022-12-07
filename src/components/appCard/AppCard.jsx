import React from "react";
import data from "../../data/dataApps.json";
import {
  GeneralSection,
  GeneralDiv,
  IconImg,
  InfoDiv,
  NameDiv,
  Category,
  Platforms,
  Rating,
  Imge,
  Trailer
} from "./AppCard_Style";

const AppCard = () => {
  const datos = data.data.apps;

function InfoApp (name){
  
}

  

  return (
    <div>
      {datos.map((items) => {
        return <GeneralSection>
          <GeneralDiv  onClick={
          ()=>InfoApp (items.app_id)
        }>
            <IconImg>
              <Trailer>{items.trailer}</Trailer>  
              <Imge src={items.app_icon} />
            </IconImg>
            <InfoDiv>
              <NameDiv>
                <h4>{items.app_name}</h4>
              </NameDiv>
              <Category>
                <p>{items.app_category}</p>
              </Category>
              <Platforms>
                <p>{items.platforms[0]}</p>
                <p>{items.platforms[1]}</p>
                <p>{items.platforms[2]}</p>
              </Platforms>
              <Rating>
                <p>✨✨✨✨✨</p>
                <p>{items.rating}</p>
              </Rating>
            </InfoDiv>
          </GeneralDiv>
        </GeneralSection>;
      })}
      
    </div>
  );
};
export default AppCard;
