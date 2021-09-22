import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Pomodoro from './components/Pomodoro'


ReactDOM.render(
  <React.StrictMode>
  <Pomodoro/>
  </React.StrictMode>,
  document.getElementById('root')
);