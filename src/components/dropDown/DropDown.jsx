import React, { useState } from "react";
import {
  DropDownBox,
  DrobDownButton,
  DropDownMenu,
  DropDownMenuContainer,
  DropDownItem,
} from "./DropDown_Styled.js";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <DropDownBox>
        <DrobDownButton onClick={() => setOpen(!open)}>
          <p>plataformas</p>
          {open === true ? (
            <MdOutlineArrowDropUp />
          ) : (
            <MdOutlineArrowDropDown />
          )}
        </DrobDownButton>

        <DropDownMenu>
          {open === true ? (
            <DropDownMenuContainer>
              <DropDownItem></DropDownItem>
              <DropDownItem>
                <input type="checkbox" id="cbox1" value="firstCheckbox" />
                iOS
              </DropDownItem>
              <DropDownItem>
                <input type="checkbox" id="cbox1" value="firstCheckbox" />
                Android
              </DropDownItem>
              <DropDownItem>
                <input type="checkbox" id="cbox1" value="firstCheckbox" />
                webkit
              </DropDownItem>
            </DropDownMenuContainer>
          ) : null}
        </DropDownMenu>
      </DropDownBox>
    </React.Fragment>
  );
};

export default DropDown;
