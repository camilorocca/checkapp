import React from "react";
import AppNameInput from "../appNameInput/AppNameInput";
import DropDown from "../dropDown/DropDown";
import LoadAppIcon from "../loadAppIcon/LoadAppIcon";
import { DropDownContainer } from "../dropDown/DropDown_Styled";
import { Container } from "./AppForm_Styled";
import AppDescriptionTextArea from "../appDescriptionTextArea/AppDescriptionTextArea";
import LoadAppScreens from "../loadAppScreens/LoadAppScreens";
import Button from "../button/Button";

const AppUpload = () => {
  return (
    <React.Fragment>
      <AppNameInput />
      <LoadAppIcon />
      <Container>
        <DropDownContainer>
          <DropDown />
          <DropDown />
        </DropDownContainer>
      </Container>
      <AppDescriptionTextArea />
      <LoadAppScreens />
      <Container>
        <Button />
      </Container>
    </React.Fragment>
  );
};



export default AppUpload;
