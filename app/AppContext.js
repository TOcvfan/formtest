"use client"
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState('Dk');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const value = {
        language,
        setLanguage,
        isLoggedIn,
        setIsLoggedIn
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext)