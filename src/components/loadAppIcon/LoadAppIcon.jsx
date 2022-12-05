import React from "react";
import { UploadAppContainer, UploadAppBox } from "./LoadAppIcon_styled";
import { BiImageAlt } from "react-icons/bi";

const LoadApp = () => {
  return (
    <React.Fragment>
      <UploadAppContainer>
        <UploadAppBox>
          <BiImageAlt />
        </UploadAppBox>
      </UploadAppContainer>
    </React.Fragment>
  );
};

export default LoadApp;
