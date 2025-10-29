'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  content: string, 
  title: string
}

interface MainContextProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  changePage: boolean;
  setChangePage: (loading: boolean) => void;
  formatNumber: (num: number, locale?: string) => string;
  showNotif: boolean;
  setShowNotif: (showNotif: boolean) => void;
  notifMessage: Message;
  setNotifMessage: (notifMessage: Message) => void;
}

const MainContext = createContext<MainContextProps | undefined>(undefined);

export const MainContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [changePage, setChangePage] = useState<boolean>(true);
  const [showNotif, setShowNotif] = useState<boolean>(false);
  const [notifMessage, setNotifMessage] = useState<Message>({content: '', title: ''});

  const formatNumber = (num: number, locale: string = 'fr-FR'): string => {
    return num.toLocaleString(locale);
  };

  const contextValue: MainContextProps = {
    loading,
    setLoading,
    changePage,
    setChangePage,
    formatNumber,
    showNotif,
    setShowNotif,
    notifMessage,
    setNotifMessage,
  };

  return (
    <MainContext.Provider value={contextValue}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = (): MainContextProps => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error('useMain must be used within an MainProvider');
  }

  return context;
};
