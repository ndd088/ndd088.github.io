import React, { createContext, useContext, useState } from 'react';

const PanelContext = createContext();

export const usePanelContext = () => {
  return useContext(PanelContext);
};

export const PanelProvider = ({ children }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <PanelContext.Provider value={{ isPanelOpen, togglePanel }}>
      {children}
    </PanelContext.Provider>
  );
};