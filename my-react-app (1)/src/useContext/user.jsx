import { useState } from "react";
import { ThemeChange } from "./theme";

function User(props) {
    const [userData, setUserData] = useState({ name: "venk", "email": "venkat", age: 25 });
    const { name, email, age } = userData;
    console.log("Userthemeee ThemeChange_det", props);
    return (
        <>
            <h1> User Information </h1>
            <p> {`Name is ${name}, Email is ${email} Age is  ${age}`}</p>
            <ThemeChange theme={props?.theme} />
        </>
    )
}

export default User;