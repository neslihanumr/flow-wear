import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

const Root = () => {
return (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

