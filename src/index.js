import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'react-s-alert/dist/s-alert-default.css'; // Import the default styles
import 'react-s-alert/dist/s-alert-css-effects/slide.css'; 
// Import a specific animation effect, we can choose different effects


import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);

registerServiceWorker();