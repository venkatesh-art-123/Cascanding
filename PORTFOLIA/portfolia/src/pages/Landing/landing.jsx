import Header from "../../components/Layouts/Header/header";
import Button from "../../Property/button";
import "../../components/Layouts/Landing/landing.css";
import Images from "../../utils/images";

function Landing() {

    return (
        <>
            <div className="main-furni">
                <Header />
                <div className="d-flex">
                    <div className="border border-danger banner-cont">
                        <div className="banner-tit display-3 fw-bold">
                            <h1>Modern Interior Design <br /> Studio</h1>
                        </div>
                        <div>
                            <p className="ban-p">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br />velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                            <div className="d-flex gap-2">
                                <Button className="shop-btn border rounded-pill" text={"Shop Now"} />
                                <Button className="exp-btn border rounded-pill" text={"Explore"} />
                            </div>
                        </div>

                    </div>
                    <div className="border border-info back-dot">
                        <div className="sofaImage">
                            {/* <img src={Images.sofaImage} /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* #198754 */}
        </>
    )
}

export default Landing;