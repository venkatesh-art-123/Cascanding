import { useState } from "react";

function CountData() {
    const [countDet, setCountDet] = useState(1);
    var x = 1;

    function handleAdd() {
        x = x + 1;
        console.log("xxxxxxvalue", x)
        setCountDet(prev => prev + 1)
    }

    console.log("xxxxxxx", x, countDet)

    return (
        <>
            <h1> Count {countDet}</h1>
            <button onClick={() => handleAdd()}> Increment </button>
        </>
    )

}

export default CountData;