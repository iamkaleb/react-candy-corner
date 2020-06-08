import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import CandyCorner from './components/CandyCorner';

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <CandyCorner />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
