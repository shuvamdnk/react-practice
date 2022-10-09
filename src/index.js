import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'Shuvam'
const lastname = 'Dutta'

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <React.Fragment>
    <h1>{`${name} ${lastname}`}</h1>
    <p>{date}</p>
    <h4>{time}</h4>
  </React.Fragment>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
