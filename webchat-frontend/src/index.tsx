import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Home} from "./pages/Home";
import { MainLayout } from "./components/Layout";
import { GlobalStyle } from "./globalStyle";

const Main = () => {
  return (
    <React.StrictMode>
      <GlobalStyle/>
      <MainLayout>
        <Home />
      </MainLayout>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
