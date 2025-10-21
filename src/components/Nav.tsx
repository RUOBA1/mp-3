import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 25%;
    padding: 20px 10px;
    background-color: #bde0fe;
    
    @media screen and (max-width: 1000px) {
    width: 100%;
    }
`;

const StyledUl = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: normal;
  }
`;

const StyledItem = styled.li`
  border: 2px solid black;
  border-radius: 6px;
  background-color: gray;
  padding: 5px;
  margin: 10px;

  @media screen and (max-width: 1000px) {
    flex: 1 1 auto;
    max-width: 150px;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  color: white;
  text-decoration: none;
  font-size: calc(7px + 1vw);
  padding: 10px 15px;
  display: block;
`;

export default function Nav(){
    return(
        <StyledNav>
            <StyledUl>
                <StyledItem><StyledLink to={`/`}>Home</StyledLink></StyledItem>
                <StyledItem><StyledLink to={`/education`}>Education</StyledLink></StyledItem>
                <StyledItem><StyledLink to={`/experiences`}>Experiences</StyledLink></StyledItem>
                <StyledItem><StyledLink to={`/certifications`}>Certifications</StyledLink></StyledItem>
                <StyledItem><StyledLink to={`/references`}>References</StyledLink></StyledItem>
                <StyledItem><StyledLink to={`/projects`}>Projects</StyledLink></StyledItem>
            </StyledUl>
        </StyledNav>
    )
}