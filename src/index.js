import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PanelProvider } from '../src/contexts/PanelContext';
import makeServer from './services/server';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PanelProvider>
      <App />
    </PanelProvider>
  </React.StrictMode>,
);