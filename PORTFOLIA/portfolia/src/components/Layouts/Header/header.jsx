import "./header.css";
import Images from "../../../utils/images";


function Header() {
    console.log("Header Images", Images.profileIcon)
    return (
        <>
            <div className="header-main d-flex justify-content-around border border-success">
                <div className="head-pad">
                    <h1>Furni.</h1>
                </div>
                <div className="header-bar d-flex justify-content-between border border-warning">
                    <div className="menu-bar border border-danger">
                        <ul className="head-pad-menu d-flex justify-content-between">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="head-icon d-flex justify-content-between border border-info">
                        <button className="header-btn pt-2">
                            <img src={Images.profileIcon} />
                        </button>
                        <button className="header-btn pt-2">
                            <img src={Images.shopIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;