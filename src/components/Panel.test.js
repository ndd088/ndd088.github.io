import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Panel from './Panel';
import { PanelContextProvider } from '../contexts/PanelContext';

describe('Panel component', () => {
  test('renders without crashing', () => {
    render(
      <PanelContextProvider>
        <Panel />
      </PanelContextProvider>
    );
  });

  test('displays the user name', () => {
    const { getByText } = render(
      <PanelContextProvider>
        <Panel />
      </PanelContextProvider>
    );
    expect(getByText('Nana Dzigua')).toBeInTheDocument();
  });

  test('clicking the go back button redirects to the home page', () => {
    const { getByText } = render(
      <PanelContextProvider>
        <Panel />
      </PanelContextProvider>
    );
    const goBackButton = getByText('Go back');
    fireEvent.click(goBackButton);
    expect(window.location.href).toBe('/');
  });
});