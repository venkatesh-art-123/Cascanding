import { Link } from "react-router-dom";
import "../Routes/nav.css"
function Navbar() {


    return (
        <>
            <nav >
                {/* border: "2px solid red", backgroundColor: "violet" */}
                <ul style={{ border: "2px solid red", backgroundColor: "violet", display: "flex", justifyContent: "space-around" }}>
                    {/* <li> Home </li>
                    <li> About </li>
                    <li> Contact </li> */}
                    <Link to="/home"> Home </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;