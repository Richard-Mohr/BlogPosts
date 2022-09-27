import React, {useEffect, useState} from "react";
import {THEME_STORAGE_LOCATION, ThemeContext, Themes} from "../../../context/ThemeContext";

interface ThemeContextWrapperProps {
    children?: React.ReactNode
}

const getDefaultTheme = (): Themes => {
    const localStorageTheme = localStorage.getItem(THEME_STORAGE_LOCATION) as Themes
    const browserDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? Themes.dark : Themes.light
    return localStorageTheme ?? browserDefaultTheme
}

export const ThemeContextWrapper = (props: ThemeContextWrapperProps): JSX.Element => {

    const [currentTheme, setCurrentTheme] = useState<Themes>(getDefaultTheme())

    useEffect(() => {
        for(const theme in Themes) {
            document.body.classList.remove(theme)
        }
        document.body.classList.add(currentTheme)
        localStorage.setItem(THEME_STORAGE_LOCATION, currentTheme)
    },[currentTheme])

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, changeTheme: setCurrentTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}