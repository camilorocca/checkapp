import React from "react";
import AppNameInput from "../../components/appNameInput/AppNameInput";
import DropDown from "../../components/dropDown/DropDown";
import LoadAppIcon from "../../components/loadAppIcon/LoadAppIcon";
import { DropDownContainer } from "../../components/dropDown/DropDown_Styled";
import { Container } from "./AppUploadForm_Styled";
import AppDescriptionTextArea from "../../components/appDescriptionTextArea/AppDescriptionTextArea";
import LoadAppScreens from "../../components/loadAppScreens/LoadAppScreens";
import Button from "../../components/button/Button";

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
