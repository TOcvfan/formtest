"use client"
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const OpretData = ({ children }) => {
    const [data, setData] = useState({
        fornavn: "",
        fisse: "",
    });
    const value = {
        data,
        setData
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext)