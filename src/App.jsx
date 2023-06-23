import React from "react";
import Footer from "./component/Header/Footer.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import Search from "./component/Search/Search.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Profile />
      <Settings />
      <Footer />
    </>
  );
};

export default App;
