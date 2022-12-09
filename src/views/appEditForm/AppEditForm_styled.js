import styled from 'styled-components'
import { brandColours } from '../../variables/variables'

export const SelectAppModal = styled.div`
width:100%;
position:absolute;
height:100%;
background-color: ${brandColours.whiteColor};
display:flex;
align-items: center;
justify-content:center;
z-index:1;
${props => props.isOpen ? "opacity:1;" : "opacity:0; z-index:-2;"}
flex-direction: column;
>ul{
    >li{
        list-style: none;
        cursor: pointer;
        width:50%;
        height:2rem;
        background-color: blue;
        &:hover{
            scale:1.1;
        }
    }
}

`