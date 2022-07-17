import React, { createContext, useState } from "react";

interface ImageColors {
    primary: string;
    secondary: string
}

export const initStateImageColors = {
    primary: 'transparent',
    secondary: 'transparent'
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    handleSetColors: (colors: ImageColors) => void;
    handleSetPrevColors: (colors: ImageColors) => void;    
}

export const GradientContext = createContext({} as ContextProps); 

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState(initStateImageColors);    
    const [prevColors, setPrevColors] = useState(initStateImageColors);

    const handleSetColors = ( colors: ImageColors ) => {
        setColors( colors );
    }

    const handleSetPrevColors = ( colors: ImageColors ) => {
        setPrevColors(colors);
    }

    return (
        <GradientContext.Provider
            value={{
                colors,
                prevColors,
                handleSetColors,
                handleSetPrevColors
            }}
        >
            { children }
        </GradientContext.Provider>
    )

}