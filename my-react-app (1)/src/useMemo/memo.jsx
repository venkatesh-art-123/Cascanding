import { useEffect, useMemo, useState } from "react"

function UseMemoComponent() {

    const [value, setValue] = useState("");
    const [dark, setDark] = useState("light")

    const [doubleNum, setDoubleNum] = useState("")


    // const doubleNumber =useEffect(() => {

    //     console.log("doubleNumdoubleNum", doubleNum)
    //     setDoubleNum(slowFunction(value))
    // }, [value])

    const doubleNumber = useMemo(() => {
        return slowFunction(value);
    }, [value]);


    const themeStyle = {
        backgroundColor: dark === "light" ? "white" : "black",
        color: dark === "light" ? "black" : "white"
    };
    console.log("themeStylethemeStyle", themeStyle);
    console.log('vaaaaaaaa', value);



    return (
        <>
            <p> Increase value {doubleNumber}</p>
            <input type="text" value={value} onChange={(e) => setValue(e?.target?.value)} />
            <div style={themeStyle}>{value}</div>
            <button onClick={() => setDark(dark == "light" ? "dark" : "light")}> Theme update</button>

        </>
    )
}

export default UseMemoComponent;


function slowFunction(num) {
    console.log("each rendering the slowFUnction call")
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
}


