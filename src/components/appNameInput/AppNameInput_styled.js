import styled from "styled-components";

export const TextField = styled.input`
  display: flex;
  
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;

  border: none;
  overflow: auto;
  outline: none;
  resize: none; /*remove the resize handle on the bottom right*/

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  border: 2px solid black;

  height: 3rem;
  padding-left: 1rem;
  font-size: 1.5rem;
`;
