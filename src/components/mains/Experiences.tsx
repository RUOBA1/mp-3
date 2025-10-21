import {StyledMain} from "./Home.tsx";
import styled from "styled-components";

const StyledH2 = styled.h2`
    font-size: 26px;
    margin: 15px 0;
    padding: 15px 0;
    border-bottom: 3px solid black;
    width: 85%;
`;
const StyledP = styled.p`
    font-size: 18px;
    margin-bottom: 15px;
    padding: 12px;
    width: 85%
`;
const DateWork = styled.p`
    width: 85%;
    text-align: right;
`;

export default function Experiences() {
    return(
        <StyledMain>
            <title>Experiences | Resume</title>
            <StyledH2>
                Industrial and Commercial Bank of China (ICBC)
                Big Data Model Prompt Rewriting and AI Database Information Editor
            </StyledH2>
            <DateWork>
                Jul 2024 – Aug 2024
                Shanghai, China
            </DateWork>
            <StyledP>
                - Collaborated with a team to address client needs, reducing AI output errors and organizing
                information.
                - Edited AI-related database content and rewrote prompts for big data models.
                - Handled administrative tasks such as booking meetings and preparing meeting content.
            </StyledP>

            <StyledH2>
                BU Global China Connection
                Member of Affairs, Secretary
            </StyledH2>
            <DateWork>
                Aug 2023 – Aug 2024
                Boston, MA
            </DateWork>
            <StyledP>
                - Managed the official WeChat account, guiding new students to join groups, preparing event
                materials, and coordinating with businesses.
                - Supported marketing and finance teams to organize events with over 40 participants.
                - Coordinated with the university to reserve event venues and ensured participant attendance.
            </StyledP>
        </StyledMain>
    )
}