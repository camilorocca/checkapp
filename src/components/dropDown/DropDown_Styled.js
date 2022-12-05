import styled from "styled-components";

export const DropDownBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  background-color: #fff4d6;
  border: 2px solid black;
  border-top: none !important;
  color: black;
  width: auto;
  padding: 1rem;
  font-size: 1.5rem;
`;

export const DrobDownButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DropDownMenu = styled.div`
  ${'' /* position: absolute; */}
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  ${'' /* height: 3rem; */}
`;

export const DropDownMenuContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: auto;
  height: auto;
`;

export const DropDownItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0 0 1rem 0;
  z-index: 1;
  font-size: 1.2rem;

  &:first-of-type {
    display: flex;
    justify-content: space-between;
  }
  > input {
    width: 1rem;
    height: 1rem;
    outline: 1px solid grey;
  }!
`;

export const DropDownContainer = styled.div`
    height: auto;
  `
