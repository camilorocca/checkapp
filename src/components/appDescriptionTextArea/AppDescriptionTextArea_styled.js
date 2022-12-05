import styled from "styled-components";

export const AppDescription = styled.div`
  display: flex;
  border: 2px solid black;
  border-top: none !important;
  height: 5rem;

  padding: 1rem;
  font-size: 1rem;
  > textarea {
    border: none;
    overflow: auto;
    outline: none;
    resize: none; /*remove the resize handle on the bottom right*/

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    font-size: 1.2rem;
    font-family: "Atkinson Hyperlegible", sans-serif;
  }
`;
