import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Certifications from "./mains/Certifications.tsx";
import Experiences from "./mains/Experiences.tsx";
import Projects from "./mains/Projects.tsx";
import References from "./mains/References.tsx";
import Credits from "./mains/Credits.tsx";
import styled from 'styled-components';

const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    font-family: "Times New Roman", Times, serif;
`;

const Container = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default function Root() {


    return(
        <>
            <PageWrapper>
                <Header/>
                <Container>
                    <Nav/>
                    <Routes>
                        <Route path={`/`} element={<Home/>}/>
                        <Route path={`/education`} element={<Education/>}/>
                        <Route path={`/experiences`} element={<Experiences/>}/>
                        <Route path={`/certifications`} element={<Certifications/>}/>
                        <Route path={`/references`} element={<References/>}/>
                        <Route path={`/projects`} element={<Projects/>}/>
                        <Route path={`/credits`} element={<Credits/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </PageWrapper>

        </>
    )
}