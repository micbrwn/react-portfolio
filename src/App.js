import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import PortfolioContainer from "./components/PortfolioContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


// const App = () => <PortfolioContainer />;

// export default App;


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem("dark") === "true") {
      document.body.classList.add("dark");
      return true;
    } else {
      return false;
    }
  });

  const setDarkMode = (x) => {
    localStorage.setItem("dark", x);
    setIsDarkMode(x);
    document.body.classList.toggle("dark");
  };
{/* <PortfolioContainer />; */}

  return (
    <div className="App">
      <DarkModeToggle
        onChange={setDarkMode}
        checked={isDarkMode}
        size={35}
        speed={3}
      />
      <PortfolioContainer />
    </div>
  );
  
}