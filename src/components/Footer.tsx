import {Link} from "react-router";
import styled from "styled-components";
import {StyledP} from "./mains/Home";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #cdb4db;
  padding: 10px;
`;

export default function Footer() {


    return(
        <StyledFooter>
            <StyledP>All rights reserved by &#169; <Link to={`/credits`}>Credits</Link></StyledP>
        </StyledFooter>
    )
}