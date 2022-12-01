import styled from 'styled-components';


export const SectionSingle = styled.section`
    width: 100%;
    height: 80vh;
`;
export const AppSingle = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
`;
export const AppIcon = styled.div`
    width: 30%;
    height: 5%;
    display: flex;
    margin-top: 8%;
`;
export const Icon = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 18px;
`;
export const AppInfo = styled.div`
    width: 70%;
    height: 10%; 
`;
export const Category = styled.div`
    height:20%;
`;
export const AppPlatforms = styled.div`
    height: 150%;
    margin-top: 5%;
    display: flex;
    gap: 7px;>p{
        background-color: yellow;
        height: 100%;
        width: 25%;
        display: flex;
        justify-content: center;
    }
`;
export const AppRating = styled.div`
    position: absolute;
    top: 18%;
    right: 58%;
    height: 10%;
    display: flex;
    gap: 10px;
`;

export const DescriptionDiv = styled.div`
    width:100%;
    max-height:150px;
    overflow:scroll;
    
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    margin-top:5%;
`;
export const DisplayImage =styled.img`
    width: 100px;
    height: 200px;
    border-radius: 15px;  
`;