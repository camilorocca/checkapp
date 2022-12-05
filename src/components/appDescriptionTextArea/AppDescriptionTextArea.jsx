import React from "react";
import { AppDescription } from "./AppDescriptionTextArea_styled";

const AppDescriptionInput = () => {
  return (
      <React.Fragment>
        <AppDescription>
          <textarea placeholder={'Describe the app here...'}>
          </textarea>
        </AppDescription>
      </React.Fragment>
  );
};

export default AppDescriptionInput;
