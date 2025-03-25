import React, { useState, useEffect } from "react";

function ChangeMode() {
    const[mode, setMode] = useState(localStorage.getItem('mode') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-mode', mode);
        localStorage.setItem('mode', mode);
    }, [mode]);

    const toggleMode = () => {
        setMode(mode === "light" ? "dark" : "light");
    }

    return(
        <div>
            <button onClick={toggleMode} className="mode-button">
                {mode === "light" ? "⏾" : "☀︎"}
            </button>
        </div>
    )
}
export default ChangeMode