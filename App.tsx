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

const defaultTheme = {
  background: "rgb(7, 7, 36)",
};
function App() {
  const [isShown, setIsShown] = useState(false);
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
        <Container>
          The Planets <Hamburger onClick={changeHandler}></Hamburger>
        </Container>
        <div style={{ display: "flex" }}>
          <Planets href="/">mercury</Planets>
          <Planets href="/venus">venus</Planets>
          <Planets href="/earth">earth</Planets>
          <Planets href="/mars">mars</Planets>
          <Planets href="/jupiter">jupiter</Planets>
          <Planets href="/saturn">saturn</Planets>
          <Planets href="/uranus">uranus</Planets>
          <Planets href="/neptune">neptune</Planets>
        </div>
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
                <Route
                  path="/"
                  element={
                    <>
                      <Mercury />
                    </>
                  }
                ></Route>

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
`;

const Planets = styled.a`
  display: flex;
  justify-content: space-between;
  color: #ffffffc3;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  margin: 24px;
  font-size: 12px;
  @media (max-width: 678px) {
    display: none;
  }
`;
