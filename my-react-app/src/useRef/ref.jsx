import { useEffect, useRef, useState } from "react";

function Referrence() {

    const [name, setName] = useState(null);

    const inputRef = useRef(null);


    useEffect(() => {
        console.log("naaaaaaaaaa", name);
        inputRef.current = name;
    }, [name]);
    console.log('ssssssssss', inputRef.current)

    function lastRefValue() {
        console.log("input value", inputRef.current);
        // setName(inputRef.current.value)
    }
    return (
        <>
            <span> {name}</span>
            <br></br>
            <spn> {inputRef?.current}</spn>
            <br></br>
            {/* <input type="text" ref={inputRef} /> */}
            <br></br>
            <button onClick={() => lastRefValue()}>SetName</button>
            <br></br>
            <input type="text" onChange={(e) => setName(e?.target?.value)} value={name} />
        </>
    )
}

export default Referrence;