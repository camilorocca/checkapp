import styled from "styled-components";

export const SectionSingle = styled.section`
   width: 100%;
   height: auto;
`;
export const AppSingle = styled.div`
   width: 100%;
   height: 20vh;
   display: grid;
   grid-template-columns: 2fr 3fr 1fr;
`;
export const AppIcon = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   > img {
      width:15vh;
      height:15vh;
      max-width: 150px;
      max-height:150px;
      border-radius: 18px;
   }
   /* @media (min-width: 375px){
        width:80px;
        height:80px;
    }
    @media (min-width: 425px){
        width:90px;
        height:90px;
    }
    @media (min-width: 768px){
        width:150px;
        height:150px;
    }
    @media (min-width:1440px){
        width:200px;
        height:200px;
    } */
`;

export const AppInfo = styled.div`
   align-self: center;
`;
export const Category = styled.div`
   height: 20%;
`;
export const AppPlatforms = styled.div`
   height: auto;
   margin-top: 5%;
   display: flex;
   gap: 7px;
   > p {
      background-color: yellow;
      width: 25%;
      display: flex;
      justify-content: center;
   }
   @media (min-width: 768px) {
      width: 50%;
   }
`;
export const AppRating = styled.div`
   position: absolute;
   top: 20%;
   right: 58%;
   height: 10%;
   display: flex;
   gap: 10px;
   @media (min-width: 425px) {
      position: relative;
      margin-top: 5%;
      margin-left: 57%;
   }
   @media (min-width: 768px) {
      position: relative;
      margin-top: 2%;
      margin-left: 57%;
   }
`;

export const DescriptionDiv = styled.div`
   width: 80%;
   padding: 0 10%;
   max-height: 400px;
   overflow: scroll;
   margin-top: 5%;
   @media (min-width: 1024px) {
      width: 100%;
      height: 100%;
      overflow: visible;
   }
`;

export const ImageDiv = styled.div`
   width: 80%;
   padding: 0 10%;
   display: flex;
   justify-content: space-around;
   margin: 3vh 0vh;
`;
export const DisplayImage = styled.img`
   width: 100px;
   height: 200px;
   border-radius: 15px;
   @media (min-width: 768px) {
      width: 200px;
      height: 400px;
      border-radius: 15px;
   }
`;

export const AddComment = styled.div`
   width: 80%;
   padding: 0 10%;
   background-color: orange;

   display: flex;
   flex-direction: column;
   overflow: scroll;
   overflow: hidden;
   gap: 1rem;
   ${(props) => (props.open ? null : "max-height:2.7rem;")}

   >h4 {
      height: 1rem;
      padding: 0.7rem 0;
      cursor: pointer;
   }
   > input {
      border: 2px solid black;

      height: 2rem;
      padding-left: 1rem;
      font-size: 1rem;
   }
   > button {
      margin-bottom: 1rem;
      width:80%;
      margin:0 10%;
      margin-bottom:1rem;
      padding:0.5rem 0;
      background-color: black;
      color:white;
      border:none;
      &:hover{
        scale:1.1;
      }
      &:active{
        scale:1;
      }
   }
`;
