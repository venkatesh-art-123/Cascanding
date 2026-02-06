import { Link, useNavigate } from "react-router-dom";
import "../Routes/nav.css"
function Navbar() {


    let navigate = useNavigate();


    return (
        <>
            <nav >
                {/* border: "2px solid red", backgroundColor: "violet" */}
                <ul style={{ border: "2px solid red", backgroundColor: "violet", display: "flex", justifyContent: "space-around" }}>
                    {/* <li> Home </li>
                    <li> About </li>
                    <li> Contact </li> */}
                    {/* <Link to="/home"> Home </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link> */}

                    {/* Redux  */}
                    <li onClick={() => navigate("/user")}> USER </li>
                    <li onClick={() => navigate("/userInfo")}> USERINFO </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;