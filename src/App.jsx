import React from "react";
import Footer from "./component/Footer/Footer.jsx";
import Navbar from "./component/Navbar/Navbar.jsx";
import Search from "./component/Search/Search.jsx";
import Profile from "./component/Profile/Profile.jsx";
import Settings from "./component/Settings/Settings.jsx";

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
