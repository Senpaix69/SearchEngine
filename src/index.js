import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ResultContextProvider } from './contexts/ResultContextsProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>
);

reportWebVitals();
