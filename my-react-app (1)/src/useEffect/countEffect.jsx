import { useEffect, useState } from "react";

export function CountEffect() {

    const [value, setValue] = useState(10);

    useEffect(() => {
        console.log("call after rendered the fullpage")
        setValue(200)

        return () => {}
    }, []);

    useEffect(() => {
        setInterval(() => {
        }, 1000);
        return () => clearInterval();
    }, [])

    const handleAdd = () => {
        setValue(value => value + 100)
    }

    console.log("call initial the page", value)
    return (
        <>
            <h1> Value {value}</h1>
            <h1> useEffect analysis</h1>
            <button onClick={() => handleAdd()}>Increment</button>
        </>
    )

}

