import { useContext } from "react";
import User from "./user";
import { ThemeChanges } from "../App";

function Context() {
const { theme } = useContext(ThemeChanges);
    return (
        <>
            <h1> Context Begin</h1>
            <User theme={theme} />
        </>
    )
}

export default Context;