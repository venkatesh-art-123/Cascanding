import { useState } from "react";
import { useDispatch } from "react-redux";
import { userData } from "./Action/slice";

function User() {

    const [userDetails, setUserDetails] = useState([]);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e?.target;
        let length = userDetails.length;
        let updateData = userDetails;

        // const obj={
        //     name:"",
        //     email:"",
        //     age:"",
        // }
        // obj[name]+=value;

        // console.log(obj)

        // if (length == 0) {
        //     // setUserDetails([{ [name]: value }])
        // } else {
        //     // userDetails[length - 1] = { ...userDetails[length - 1], ...{ [name]: value } }
        //     console.log("userDetails User", userDetails)
        // }
    }


    function handleAdd() {
        setUserDetails([...userDetails])
        // console.log("userINdddddddd", userDetails)
        // dispatch(userData({ userInfo: userDetails }))
    }
    return (
        <>
            <label>Name</label>
            <br />
            <input type="text" name="name" onChange={(e) => handleChange(e)} />
            <br />
            <label>Email</label>
            <br />
            <input type="email" name="email" onChange={(e) => handleChange(e)} />
            <br />
            <label>Age</label>
            <br />
            <input type="text" name="age" onChange={(e) => handleChange(e)} />
            <br />
            <button type="text" onClick={() => handleAdd()}> Add </button>
        </>
    )
}

export default User;