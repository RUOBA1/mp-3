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

export default function Credits(){
    return(
        <StyledMain>
            <title>Credits | Resume</title>
            <StyledH2>Credits</StyledH2>
            <StyledP>All pictures used are personally taken</StyledP>
        </StyledMain>
    )
}