import { useContext } from "react";
import { useEffect, useMemo, useState } from "react"
import { ThemeChanges } from "../App";

export function ThemeChange() {

    const { theme } = useContext(ThemeChanges);
    // const [theme, setTheme] = useState(props?.theme);
    // const [themeChange, setThemeChange] = useState({
    //     "background-color": "white",
    //     "color": "black"
    // });
    // Useeffect through achieve this scenario
    // useEffect(() => {
    //     console.log("ThemeChange_det", theme)
    //     setThemeChange({
    //         "background-color": props?.theme ? "black" : "white",
    //         "color": props?.theme ? "white" : "black"
    //     })
    // }, [props])


    // useMemo
    const themeChange = useMemo(() => {
        console.log("ThemeChange_det", theme)
        return {
            "background-color": theme ? "black" : "white",
            "color": theme ? "white" : "black"
        }
    }, [theme]);



    console.log("themeChange ThemeChange_det", theme, themeChange)
    return (
        <>
            <div style={themeChange}>
                <h1> This is receive the context value</h1>
            </div>
        </>
    )
}