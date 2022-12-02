import React, { useState } from "react";
import {
  DropDownBox,
  DrobDownButton,
  DropDownMenu,
  DropDownMenuContainer,
  DropDownItem,
} from "./DropDown_Styled.js";
import { MdOutlineArrowDropDown } from "react-icons/md";

const DropDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <DropDownBox>
        <DrobDownButton>
          <p>plataformas</p>
          <MdOutlineArrowDropDown />
        </DrobDownButton>

        <DropDownMenu onClick={() => setOpen(!open)}>
          {open == true ? (
            <DropDownMenuContainer>
              <DropDownItem>
                <MdOutlineArrowDropDown />
              </DropDownItem>
              <DropDownItem>
                <input type="checkbox" id="cbox1" value="firstCheckbox" />
                Link 1
              </DropDownItem>
              <DropDownItem>
                <input type="checkbox" id="cbox1" value="firstCheckbox" />
                Link 1
              </DropDownItem>
              <DropDownItem>
                <input type="checkbox" id="cbox1" value="firstCheckbox" />
                Link 1
              </DropDownItem>
            </DropDownMenuContainer>
          ) : null}
        </DropDownMenu>
      </DropDownBox>
    </React.Fragment>
  );
};

export default DropDown;
