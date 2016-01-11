import './main.css';

import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx'

const main = () => {
  const app = document.createElement('div');
  document.body.appendChild(app);
  render(<App />, app);
}
main();
