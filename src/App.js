import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { useState } from "react";

import { BrowserRouter as Router, Routes , Route,  } from 'react-router-dom';





function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(13,23,33)';
      showAlert("Dark Mode has enabled", "success")
      document.title = 'TextMgic-Darkmod';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has enabled", "success")
      document.title = 'TextMgic-Lightmod';
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          
          <Routes >
          
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Textform heding="Text Magic" mode={mode} showAlert={showAlert} />} />
                  
        </Routes >
        </div>
      </Router>
    </>
  );
}

export default App;
