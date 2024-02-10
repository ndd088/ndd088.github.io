import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { PanelProvider } from '../src/contexts/PanelContext';
import makeServer from './services/server';
import App from './App';

jest.mock('./services/server', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockCreateRoot = jest.spyOn(require('react-dom'), 'createRoot');
const mockRender = jest.fn();
mockCreateRoot.mockImplementation(() => ({
  render: mockRender,
}));

const mockGetElementById = jest.spyOn(document, 'getElementById');
mockGetElementById.mockImplementation(() => document.createElement('div'));

const originalNodeEnv = process.env.NODE_ENV;
beforeEach(() => {
  process.env.NODE_ENV = 'development';
});

afterEach(() => {
  process.env.NODE_ENV = originalNodeEnv;
});

describe('index.js', () => {
  it('renders App component inside PanelProvider inside StrictMode', () => {
    act(() => {
      require('./index.js');
    });

    expect(mockCreateRoot).toHaveBeenCalled();
    expect(mockRender).toHaveBeenCalledWith(
      <React.StrictMode>
        <PanelProvider>
          <App />
        </PanelProvider>
      </React.StrictMode>,
      expect.anything()
    );
  });

  it('calls makeServer in development mode', () => {
    act(() => {
      require('./index.js');
    });

    expect(makeServer).toHaveBeenCalled();
  });
});