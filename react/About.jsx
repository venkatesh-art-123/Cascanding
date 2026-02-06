
export function About({ name, email, mobile }) {
    return (
        <>
            <h1> ABOUT US</h1>
            <h2>{name}{email}{`${name}${email}${mobile}`}</h2>
        </>
    )
}


export function MySelf() {
    return (
        <>
            <h1> My self code</h1>
        </>
    )
}