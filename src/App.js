import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handleAlertClose = () => {
    setAlert(null);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1c1c1c';
      showAlert('Dark mode has been enabled', 'success');
      document.title = "TextRefine: Dark mode";
      setInterval(() => {
        document.title = "TextRefine";
      }, 2000);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = "TextRefine: Light mode";
      setInterval(() => {
        document.title = "TextRefine";
      }, 2000);
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextRefine" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <div className="container p-0">
        <Alert alert={alert} onClose={handleAlertClose} />
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextRefine - word counter, character counter, remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
