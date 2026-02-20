"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface RippleContextType {
    activeRippleIndex: number | null;
    setActiveRipple: (index: number | null) => void;
}

const RippleContext = createContext<RippleContextType>({
    activeRippleIndex: null,
    setActiveRipple: () => { },
});

export const RippleProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeRippleIndex, setActiveRippleIndex] = useState<number | null>(null);

    const setActiveRipple = useCallback((index: number | null) => {
        setActiveRippleIndex(index);
    }, []);

    return (
        <RippleContext.Provider value={{ activeRippleIndex, setActiveRipple }}>
            {children}
        </RippleContext.Provider>
    );
};

export const useRipple = () => useContext(RippleContext);
