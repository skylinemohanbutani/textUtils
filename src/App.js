import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert();
    }, 1000);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#46484a";
      showAlert("Dark Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div className="container my-3">
          <Alert alert={alert} />

          <Routes>
            <Route path="/about" element = {<About />}/>
         
            <Route path="/" element = {<TextForm heading="Enter Your Text Here:" mode={mode} showAlert={showAlert} />} /> 
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
