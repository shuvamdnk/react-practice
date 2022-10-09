import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const img1 = 'https://image.api.playstation.com/vulcan/ap/rnd/202106/1111/0hpvuLi3lnHUShBSXQqu78sw.png';
const img2 = 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__480.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <React.Fragment>
    <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <img className='img-fluid' alt='image' src={img1} />
          </div>
          <div className='col-md-3'>
            <img className='img-fluid' alt='image' src={img2} />
          </div>
        </div>
    </div> 
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
