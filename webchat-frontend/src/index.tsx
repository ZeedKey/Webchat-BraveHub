import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MainLightTheme } from "./components/Theme/Presets/main-light";
import { ThemeContext } from "./store/themeContext";
import App from "./pages/App";
import { MainLayout } from "./components/Layout";

const Main = () => {
  const [theme, setTheme] = useState(MainLightTheme);
  return (
    <React.StrictMode>
      {/* <ThemeContext.Provider value={null}> */}
      <MainLayout>
        <App />
      </MainLayout>
      {/* </ThemeContext.Provider> */}
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
