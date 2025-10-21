import styled from "styled-components";
import {StyledMain} from "./Home.tsx";

const StyledH2 = styled.h2`
    font-size: 24px;
    margin: 20px 0 10px;
    border-bottom: 2px solid black;
    padding-bottom: 5px;
    width: 100%;
`;
const StyledUl = styled.ul`
    list-style: none;
    width: 100%;
    padding-left: 0;
    margin-bottom: 30px;
`;
const StyledItem = styled.li`
    border: 1px solid black;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 15px;
`;
const StyledH3 = styled.h3`
    font-size: 20px;
    margin-bottom: 8px;
`;
const StyledP = styled.p`
    font-size: 18px;
`;

export default function Certifications() {
    return(
        <StyledMain>
            <title>Certifications | Resume</title>
            <StyledH2>Certifications</StyledH2>
            <StyledUl>
                <StyledItem>
                    <StyledH3>Piano Eighth Intro Level – China</StyledH3>
                    <StyledP>
                        Certified piano level 8 out of 10, demonstrating strong performance and music theory skills.
                        Three advanced performance levels exist beyond level 10.
                    </StyledP>
                </StyledItem>
            </StyledUl>
            <StyledH2>Certifications Going To Get</StyledH2>
            <StyledUl>
                <StyledItem>
                    <h3>CompTIA A+</h3>
                    <StyledP>An industry standard for starting IT career and tech support job.</StyledP>
                </StyledItem>
                <StyledItem>
                    <h3>CompTIA Security+</h3>
                    <StyledP>An industry-wide recognized certificate for cybersecurity professionals demonstrating they have fundamental cybersecurity skills and will aid graduating students to more easily secure a job.</StyledP>
                </StyledItem>
            </StyledUl>
        </StyledMain>
    )
}