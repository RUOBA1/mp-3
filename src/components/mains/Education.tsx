import {StyledMain} from "./Home.tsx";
import styled from "styled-components";

const StyledH2 = styled.h2`
    font-size: 26px;
    margin: 20px 0;
    padding: 5px 0;
`;
const StyledP = styled.p`
    font-size: 18px;
    margin-bottom: 15px;
    padding: 12px;
`;

export default function Education(){
    return(
        <StyledMain>
            <title>Education | Resume</title>
            <StyledH2>QSI International School</StyledH2>
            <StyledP>Non profit international school organization founded in 1971 serving diplomatic, development, and business families.</StyledP>
            <StyledH2>Boston University - Computer Science Major</StyledH2>
            <StyledP>A leading private research institution with two primary campuses in the heart of Boston and programs around the world.</StyledP>
        </StyledMain>
    )
}