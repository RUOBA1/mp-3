import Shanghai from "./Shanghai.jpg";
import styled from "styled-components";

const StyledImg = styled.img`
    max-width: 70%;
    border: 1px solid black;
    margin: 20px 0;
`;

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #a2d2ff;
    align-items: center;
    width: 75%;
    padding: 30px;
    
    @media screen and (max-width: 1000px) {
    width: 100%;
    }
`;

export const StyledH2 = styled.h2`
    font-size: 26px;
    margin: 20px 0;
    padding: 5px 0;
`;

export const StyledP = styled.p`
    font-size: 18px;
    margin-bottom: 15px;
    padding: 12px;
`;

export default function Home(){


    return(
        <StyledMain>
            <title>Home | Resume</title>
            <StyledImg src ={Shanghai} alt="Shanghai"/>
            <StyledP>My name is Yanxi Yang. I'm a Computer Science junior student at Boston University. I'm from Shanghai, China and it's an amazing city that I like.</StyledP>
        </StyledMain>
    )
}