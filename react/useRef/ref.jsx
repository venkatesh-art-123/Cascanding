// import { useEffect, useRef, useState } from "react";

import { useEffect, useMemo, useRef, useState } from "react";

// function Referrence() {

//     const [name, setName] = useState(null);

//     const inputRef = useRef(null);


//     useEffect(() => {
//         console.log("naaaaaaaaaa", name);
//         inputRef.current = name;
//     }, [name]);
//     console.log('ssssssssss', inputRef.current)

//     function lastRefValue() {
//         console.log("input value", inputRef.current);
//         // setName(inputRef.current.value)
//     }
//     return (
//         <>
//             <span> {name}</span>
//             <br></br>
//             <spn> {inputRef?.current}</spn>
//             <br></br>
//             {/* <input type="text" ref={inputRef} /> */}
//             <br></br>
//             <button onClick={() => lastRefValue()}>SetName</button>
//             <br></br>
//             <input type="text" onChange={(e) => setName(e?.target?.value)} value={name} />
//         </>
//     )
// }

// export default Referrence;


function Referrence() {

    const [value, setValue] = useState("");
    const inputRef = useRef();

    console.log("rerendered page");


    // useEffect(() => {
    //     inputRef.current = value;
    // }, [value])
    
    inputRef.current = useMemo(() => {
        console.log("useMemo value")
        return value;
    }, [value])

    const displayVal = () => {
        console.log("input va", inputRef.current)
    }

    return (
        <>
            <label> My Input </label>
            <input
                type="text"
                // ref={inputRef}
                // value={value}
                onChange={(e) => setValue(e?.target?.value)}
            />
            <p> Input value {value}</p>
            <p> Input Ref {inputRef?.current}</p>
            <button onClick={() => displayVal()}> display value </button>
        </>
    )
}


export default Referrence;