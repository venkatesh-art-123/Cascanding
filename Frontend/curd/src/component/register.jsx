import { useState } from "react";
import { registrationHooks } from "../action/userAction";

function register() {
    const initiaState = {
        "name": "", "email": "", "password": ""
    }
    const [formVaue, setFormvaue] = useState(initiaState);
    const { name, email, password } = formVaue;
    const handleChange = (e) => {
        try {
            const { id, value } = e?.target;
            setFormvaue({ ...formVaue, ...{ [id]: value } })
        } catch (e) {
            console.log("handleChange__Err", e)
        }
    }

    const signUp = async (e) => {
        try {
            e?.preventDefault()
            let reqData = { name: name, email: email, password: password };
            let response = await registrationHooks(reqData);


        } catch (e) {
            console.log("signUp__Err", e)
        }
    }
    return (
        <>
            <form>
                <label> userName : </label>
                <input type="text" id="name" onChange={(e) => handleChange(e)} />
                <br></br>
                <label> email : </label>
                <input type="text" id="email" onChange={(e) => handleChange(e)} />
                <br></br>
                <label> password : </label>
                <input type="text" id="password" onChange={(e) => handleChange(e)} />
                <br></br>
                <button onClick={(e) => signUp(e)}>Submit</button>
            </form>
        </>
    )
}

export default register;