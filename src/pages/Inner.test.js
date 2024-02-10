import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Inner from './Inner';
import { PanelProvider } from '../contexts/PanelContext';

describe('Inner component', () => {
  test('renders all sections without errors', () => {
    render(
      <PanelProvider>
        <Inner />
      </PanelProvider>
    );

  });

  test('clicking on the sidebar icon toggles the panel', () => {
    const { getByTestId } = render(
      <PanelProvider>
        <Inner />
      </PanelProvider>
    );

    const sidebarIcon = getByTestId('sidebar-icon');
    fireEvent.click(sidebarIcon);

    const panel = getByTestId('panel');
    expect(panel).toHaveClass('open');

    fireEvent.click(sidebarIcon);

    expect(panel).not.toHaveClass('open');
  });
});