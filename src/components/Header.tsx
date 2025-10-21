import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    background-color: #cdb4db;
    padding: 10px;
`;
const StyledH1 = styled.h2`
    font-size: 2vw;
    margin: 20px 0;
    padding: 5px 0;
`;
const HeaderP = styled.p`
    font-size: 18px;
`;

export default function Header(){


    return(
        <StyledHeader>
            <StyledH1>Tony's Online Resume</StyledH1>
            <HeaderP>An online display of Tony's resume</HeaderP>
        </StyledHeader>
    )
}