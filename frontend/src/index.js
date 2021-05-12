import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import 'slick-carousel/slick/slick.css'; // Slick Carousel css
import 'slick-carousel/slick/slick-theme.css'; // Slick Carousel css

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
