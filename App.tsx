import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Neptune from "./components/planets/Neptune/Neptune";
import Menu from "./components/Menu/Menu";
import Mercury from "./components/planets/Mercury/Mercury";
import Venus from "./components/planets/Venus/Venus";
import Mars from "./components/planets/Mars/Mars";
import Earth from "./components/planets/Earth/Earth";
import Jupiter from "./components/planets/Jupiter/Jupiter";
import Saturn from "./components/planets/Saturn/Saturn";
import Uranus from "./components/planets/Uranus/Uranus";
import hamburger from "./assets/icon-hamburger.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Planets, FlexContainerForDesktop, PlanetsContainer } from "./components/styles/Details";

const defaultTheme = {
  background: "rgb(7, 7, 36)",
};

function App() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const changeHandler = () => {
    setIsShown(!isShown);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio&family=League+Spartan:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <div>
        <FlexContainerForDesktop>
          <Container>
            The Planets <Hamburger onClick={changeHandler}></Hamburger>
          </Container>
          <PlanetsContainer>
            <Planets color="#419EBB" href="/">
              mercury
            </Planets>
            <Planets color="#EDA249" href="/venus">
              venus
            </Planets>
            <Planets color="#6D2ED5" href="/earth">
              earth
            </Planets>
            <Planets color="#D14C32" href="/mars">
              mars
            </Planets>
            <Planets color="#D83A34" href="/jupiter">
              jupiter
            </Planets>
            <Planets color="#CD5120" href="/saturn">
              saturn
            </Planets>
            <Planets color="#1EC1A2" href="/uranus">
              uranus
            </Planets>
            <Planets color="#2D68F0" href="/neptune">
              neptune
            </Planets>
          </PlanetsContainer>
        </FlexContainerForDesktop>

        {isShown ? (
          <>
            <Menu />
          </>
        ) : (
          <div>
            <Line></Line>

            <Details>
              <div>Overview</div>
              <div>Structure</div>
              <div>Surface</div>
            </Details>
            <Line></Line>

            <Router>
              <Routes>
                <Route path="/" element={<Mercury />}></Route>

                <Route path="/venus" element={<Venus />}></Route>
                <Route path="/earth" element={<Earth />}></Route>
                <Route path="/mars" element={<Mars />}></Route>
                <Route path="/jupiter" element={<Jupiter />}></Route>
                <Route path="/saturn" element={<Saturn />}></Route>
                <Route path="/uranus" element={<Uranus />}></Route>
                <Route path="/neptune" element={<Neptune />}></Route>
              </Routes>
            </Router>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.header`
  display: flex;
  margin: 16px 24px;
  justify-content: space-between;
  font-size: 28px;
  @media (min-width: 678px) {
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
    display: flex;
  }
`;

const Hamburger = styled.div`
  background-image: url(${hamburger});
  background-repeat: no-repeat;
  color: white;
  width: 22px;
  height: 22px;
  @media (min-width: 678px) {
    display: none;
  }
`;
const Line = styled.div`
  width: 100vw;
  height: 1px;
  background: white;
  mix-blend-mode: normal;
  opacity: 0.2;
`;

const Details = styled.div`
  justify-content: space-between;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.9px;
  text-transform: uppercase;
  margin: 16px 24px;
  display: flex;
  gap: 14px;
  @media (min-width: 678px) {
    display: none;
  }
`;


