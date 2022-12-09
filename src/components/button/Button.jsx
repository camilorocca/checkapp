import React from "react";
import { MainButton } from "./Button_styled";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = (sumbit , {uploadNewApp}) => {
  return (
    <React.Fragment>
      <MainButton onClick={()=> uploadNewApp()}>
        Longer Text
        <AiOutlineArrowRight />
      </MainButton>
    </React.Fragment>
  );
};

export default Button;
