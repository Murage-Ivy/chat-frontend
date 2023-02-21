import React from "react";
import "./MainPage.css";

function MainPage({ children }) {
  return (
    <div className="main-page">
      <main>{children}</main>
    </div>
  );
}

export default MainPage;
