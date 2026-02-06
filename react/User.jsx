import { useState } from "react";
import { About as Me, MySelf as Self} from "./About";

function User({ user, email }) {

    const [userData, setUserData] = useState ({ "name" : "ven", "email" : "ven@gmail.com", "mobile" : "234234"})
    return (
        <> 
        <h1> USER</h1>
        <Me {...userData}/>
        <Self/>
         </>
    )

}

export default User;