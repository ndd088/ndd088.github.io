import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './assets/styles/App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Inner from './pages/Inner';
import { PanelProvider } from './contexts/PanelContext';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PanelProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inner" element={<Inner />} />
          </Routes>
        </PanelProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;