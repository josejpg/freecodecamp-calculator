import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";


export const enableDarkMode = (isDarkModeEnabled?: boolean): void => {
    document.body.className = isDarkModeEnabled ? 'dark' : 'light'
};


export const ToggleTheme = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handledLightMode = (): void => {
        setDarkMode(!darkMode);
        enableDarkMode(!darkMode);
    }

    return (
        <div className="toggle-wrapper">
            <input type="checkbox" id="toggleTheme" className="toggle-checkbox"
                   aria-label="Switch to dark theme" onClick={handledLightMode}/>
            <label htmlFor="toggleTheme" className="toggle-label">
                <FontAwesomeIcon icon={faSun}/>
                <FontAwesomeIcon icon={faMoon}/>
            </label>
        </div>
    );
}