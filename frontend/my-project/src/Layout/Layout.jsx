import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
