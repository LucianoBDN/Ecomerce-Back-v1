import React from 'react';
import './App.css';
import Paginas from './Router';
import { BrowserRouter as Router} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Paginas />
      </Router>
    </>

  );
}

export default App;
