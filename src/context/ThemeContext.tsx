import {createContext} from "react";

export const THEME_STORAGE_LOCATION = "default-theme"

// A theme can be added by defining it in this enum and adding a class with the same name in the index.css file.
export enum Themes {
    light = "light",
    dark = "dark"
}

interface ThemeContextInterface {
    theme: Themes
    changeTheme: (newTheme: Themes) => void
}

export const ThemeContext = createContext<ThemeContextInterface>({
    theme: Themes.light,
    changeTheme: () => {}
})