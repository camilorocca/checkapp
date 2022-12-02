import React from "react";
import TextFieldOneLine from "../textFieldOneLine/TextFieldOneLine";
import { H1Title, UploadAppContainer, UploadAppBox } from "./LoadApp_styled";

const LoadApp = () => {
  return (
    <React.Fragment>
      <H1Title>Sube tu app</H1Title>
      <TextFieldOneLine placeholder="Text text text" />
      <UploadAppContainer>
        <UploadAppBox>APP</UploadAppBox>
      </UploadAppContainer>
    </React.Fragment>
  );
};

export default LoadApp;
