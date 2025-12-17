import { useEffect, useState } from "react";

export function List({ getValue }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getValue(10));
        console.log("ddddddddd", getValue)
    }, [getValue])

    console.log('items deta', items)
    console.log('typoef', typeof items[0])
    return (
        <>
            {/* {
                items && items?.length > 0 && items?.map((val) => {
                    console.log('vvvvv', val)
                    return (
                        <p>{val}</p>
                    )

                })
            } */}
           {items && items.map((val, index) => (
            <p key={index}>{val}</p>
            ))}
        </>
    )
}