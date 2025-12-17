import { useCallback, useEffect, useMemo, useState } from "react";
import { List as ListValue } from "./List"
export function UseCallBack() {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);
    const [getItem, setGetItem] = useState([])



    // useEffect(() => {
    //         setGetItem([num + 1, num + 2, num + 3])
    // }, [num]);

    // const getValue = useMemo(() => {
    //     return [num + 1, num + 2, num + 3]
    // }, [num])

    // const getValue = useCallback(() => {
    //     return [num + 1, num + 2, num + 3]
    // }, [num])

    //Update Callback
    const getValue = useCallback((val) => {
        // setNum(val)
        return [val + 1, val + 2, val + 3];
    }, [num])
    const themeChange = {
        "background-color": dark ? "red" : "green",
        "color": dark ? "green" : "red",
    }


    return (
        <>
            <div style={themeChange}>
                <input type="text" value={num} onChange={(e) => setNum(parseInt(e?.target?.value))} />
                <button onClick={() => setDark(!dark)}>setTheme</button>
                <ListValue getValue={getValue} />
            </div>

        </>
    )
}