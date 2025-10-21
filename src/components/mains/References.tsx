import styled from 'styled-components';
import {StyledMain} from "./Home.tsx";

const StyledH2  = styled.h2`
    font-size: 26px;
    margin: 20px 0;
    padding: 5px 0;
`;
const StyledUl = styled.ul`
    list-style: none;
    width: 85%;
    padding-left: 0;
    margin-bottom: 30px;
`;
const StyledItem = styled.li`
    padding: 15px;
    margin-bottom: 15px;
`;
const StyledH3 = styled.h3`
    font-size: 20px;
    margin-bottom: 8px;
`;
const StyledP = styled.p`
    font-size: 16px;
`;

export default function References() {
    return (
        <StyledMain>
            <title>References | Resume</title>
            <StyledH2>References</StyledH2>
            <StyledUl>
                <StyledItem>
                    <StyledH3>Prof. Taymaz Davoodi</StyledH3>
                    <StyledP>
                        - Professor of Computer Science, Boston University<br/>
                        - Email: tdavoodi@bu.edu<br/>
                        - Relation: CS391 Lecturer
                    </StyledP>
                </StyledItem>
            </StyledUl>
        </StyledMain>
    )
}