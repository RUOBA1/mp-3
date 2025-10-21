import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    background-color: #cdb4db;
    padding: 10px;
`;

const HeaderP = styled.p`
    font-size: 18px;
`;

export default function Header(){


    return(
        <StyledHeader>
            <h1>Tony's Online Resume</h1>
            <HeaderP>An online display of Tony's resume</HeaderP>
        </StyledHeader>
    )
}