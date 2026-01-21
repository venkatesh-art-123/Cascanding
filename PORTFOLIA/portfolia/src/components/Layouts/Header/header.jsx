import "./header.css";
import Images from "../../../utils/images";


function Header() {
    console.log("Header Images", Images.profileIcon)
    return (
        <>
            <div className="header-main d-flex justify-content-around border border-danger">
                <div className="header-title border border-warning">
                    <h1>Furni.</h1>
                </div>
                <div className="border border-success d-flex border border-info">
                    <div className="menu-bar">
                        <ul className="d-flex justify-content-between">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="border border-warning">
                        <button>
                            <img src={Images.profileIcon} />
                        </button>
                        <button>
                            <img src={Images.shopIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;