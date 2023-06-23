import React from "react";
import Header from "./component/About/About.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import Search from "./component/Search/Search.jsx";
import Work from "./component/Work/Work.jsx";
import Education from "./component/Education/Education.jsx";
import Experience from "./component/Experience/Experience.jsx";
import Contact from "./component/Contact/Contact.jsx";
import About from "./component/About/About.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Search />
      <Work />
      <Education />
      <Experience />
      <Contact />
      <About />
    </>
  );
};

export default App;
