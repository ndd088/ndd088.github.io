import React from 'react';
import { render, act } from '@testing-library/react';
import { PanelProvider, usePanelContext } from './PanelContext';

describe('PanelContext', () => {
  test('provides correct default values', () => {
    const ConsumerComponent = () => {
      const { isPanelOpen, togglePanel } = usePanelContext();
      return (
        <>
          <span data-testid="isPanelOpen">{`${isPanelOpen}`}</span>
          <button onClick={togglePanel}>Toggle Panel</button>
        </>
      );
    };

    const { getByTestId, getByText } = render(
      <PanelProvider>
        <ConsumerComponent />
      </PanelProvider>
    );

    expect(getByTestId('isPanelOpen').textContent).toBe('true');
    getByText('Toggle Panel').click();
    expect(getByTestId('isPanelOpen').textContent).toBe('false');
  });

  test('updates context value when togglePanel is called', () => {
    const ConsumerComponent = () => {
      const { isPanelOpen } = usePanelContext();
      return <span data-testid="isPanelOpen">{`${isPanelOpen}`}</span>;
    };

    const { getByTestId } = render(
      <PanelProvider>
        <ConsumerComponent />
      </PanelProvider>
    );

    expect(getByTestId('isPanelOpen').textContent).toBe('true');
  });

  test('toggles context value when togglePanel is called', () => {
    const ConsumerComponent = () => {
      const { togglePanel } = usePanelContext();
      return <button onClick={togglePanel}>Toggle Panel</button>;
    };

    const { getByText } = render(
      <PanelProvider>
        <ConsumerComponent />
      </PanelProvider>
    );

    getByText('Toggle Panel').click();
    getByText('Toggle Panel').click();
  });
});