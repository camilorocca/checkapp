import React from "react";
import CommentBox from "../comment/CommentBox";
import { ContainerShowAdd, ContainerComments } from "./ShowAddComment_styled";

const ShowAddComment = ({ SingleApp }) => {
   console.log(SingleApp);
   return (
      <React.Fragment>
         <ContainerShowAdd>
            <ContainerComments>
               {SingleApp.reviews.map((coment) => {
                  return (
                     <CommentBox
                        user={coment.user}
                        comment={coment.review}
                     ></CommentBox>
                  );
               })}
            </ContainerComments>
         </ContainerShowAdd>
      </React.Fragment>
   );
};

export default ShowAddComment;
