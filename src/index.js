import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './pages/App/App';
import 'materialize-css/dist/css/materialize.min.css'



ReactDOM.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);
