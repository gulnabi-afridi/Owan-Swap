import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
