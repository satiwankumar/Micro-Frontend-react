import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./modules/Header";
import styled from "@emotion/styled";

const LandingLazy = lazy(() => import("./modules/Landing"));

const HeaderContainer = styled.div`
  height: 60px;
  background-color: #282c34;
`;

const App = () => {
  return (
    // <Router>
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <div>
        <Suspense fallback={<div>Loading . . .</div>}>
          <Routes>
            <Route path="/" element={<LandingLazy />} />
          </Routes>
        </Suspense>
      </div>
    </div>
    // </Router>
  );
};

export default App;
