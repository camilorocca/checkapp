
import styled from 'styled-components';



export const GeneralSection = styled.section`
    width: calc(100% - 4px);
    height: 25vh;
    border: 2px solid black;
    border-bottom:none;
`;
export const GeneralDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
   
    
`;
export const IconImg = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 50%;
    height: 100%;
    @media (min-width:375px){
        
    }
    @media (min-width: 425px){
        justify-content:start;
        margin-left:10px;
}
`;
//Trailer Section only visible in desktop
export const Trailer = styled.div`
    display:none;
`;
export const InfoDiv = styled.div`
    width: 50%;
    height: 100%;

    @media (min-width: 425px){
        margin-right:50px
}
`;
export const NameDiv = styled.div`
    height: 20%;
    font-size: 100%; 
    font-weight:bold;
`;
export const Category = styled.div`
    height: 20%;
    display: flex;
    >p{font-size: 12px;}
`;
export const Platforms =styled.div`
    width:100%;
    height: 20%;
    display: flex;
    gap:10px;
    >p{background-color: yellow; margin-top: 1%; width:50%; height:60%;  justify-content:center; display:flex; }
`;
export const Rating = styled.div`
    height: 20%;
    display: flex;
    gap: 10px;
    margin-top: -20px;
`;
export const Imge = styled.img`
    width:100px;
    height:100px;
    object-fit:cover;
    border-radius:10px;
`;