import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mercury from './components/planets/Mercury/Mercury';
import Venus from './components/planets/Venus/Venus';
import Earth from './components/planets/Earth/Earth';
import Mars from './components/planets/Mars/Mars';
import Jupiter from './components/planets/Jupiter/Jupiter';
import Saturn from './components/planets/Saturn/Saturn';
import Uranus from './components/planets/Uranus/Uranus';
import Neptune from './components/planets/Neptune/Neptune';
function Planets() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>

                {/* <Mercury /> */}
                {/* <Venus /> */}
                {/* <Earth /> */}
                {/* <Mars /> */}
                {/* <Jupiter /> */}
                {/* <Saturn /> */}
                {/* <Uranus /> */}
                <Neptune />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Planets