import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main.jsx";
import About from "./components/About.jsx";
import MoreProjects from "./components/MoreProjects.jsx";
import WorkPage from "./components/WorkPage.jsx";
import MySkills from "./components/MySkills.jsx";
import { darkTheme, lightTheme } from "./components/Themes.jsx";
import GlobalStyle from "./globalStyles";
import SoundBar from "./subComponents/SoundBar.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [themeDark, setThemeDark] = useState(true);
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeDark ? darkTheme : lightTheme}>
        <SoundBar />
        {/* <AnimatePresence exitBeforeEnter> */}
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={
              <Main
                setThemeDark={setThemeDark}
                theme={themeDark ? "dark" : "light"}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About
                setThemeDark={setThemeDark}
                theme={themeDark ? "dark" : "light"}
              />
            }
          />
          <Route
            exact
            path="/projects"
            element={<MoreProjects setThemeDark={setThemeDark} />}
          />
          <Route
            exact
            path="/work"
            element={
              <WorkPage
                setThemeDark={setThemeDark}
                theme={themeDark ? "dark" : "light"}
              />
            }
          />
          <Route
            exact
            path="/skills"
            element={
              <MySkills
                setThemeDark={setThemeDark}
                theme={themeDark ? "dark" : "light"}
              />
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <Contact
                setThemeDark={setThemeDark}
                theme={themeDark ? "dark" : "light"}
              />
            }
          />
        </Routes>
        {/* </AnimatePresence> */}
      </ThemeProvider>
    </>
  );
}

export default App;
