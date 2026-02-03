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
                    <div className=" banner-cont">
                        <div className="banner-tit">
                            <h1 className="display-4 fw-bold">Modern Interior Design Studio</h1>
                        </div>
                        <div>
                            <p className="ban-p">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br />velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                            <div className="d-flex gap-2">
                                <Button className="shop-btn border border-warning rounded-pill" text={"Shop Now"} />
                                <Button className="exp-btn border rounded-pill" text={"Explore"} />
                            </div>
                        </div>

                    </div>
                    <div className="banner-cont-img">
                        <div className="back-dot">
                            <div className="sofaImage">
                                <img className="" src={Images.sofaImage} />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Material for fruni  */}
                <div className="material-main border border-warning">
                    <div className="material-sub border border-success">
                        <div className="d-flex border border-danger">
                             <div>
                                  <div className="material-tit fw-bold"> 
                                    <h2> Crafted with <br />excellent <br /> material.</h2>
                                  </div> 
                                    <div className=""> 
                                      <p className="mat-par text-secondary">
                                      Donec vitae odio quis nisl dapibus <br /> malesuada. Nullam ac aliquet velit. <br /> Aliquam vulputate velit imperdiet dolor <br />tempor tristique. </p>
                                       <div className="d-flex"> 
                                           <Button className="mat-btn border rounded-pill" text={"Explore"} />
                                        </div>
                                    </div>
                              </div>
                                <div className="mat-img-sec"> 
                                    <div class="border border-danger"> 
                                         <div class="d-flex"> 
                                              <div className="mat-imges"> 
                                                <div className="mat-img"> 
                                                  <img src="../../Assets/images/04_product-1.png"/>
                                               </div>
                                     </div>
                                         </div>
                                    </div>
                                </div>
                          </div>
                          
                        </div>
                        
                    </div>
                   
              </div>

            {/* #198754 */}
        </>
    )
}

export default Landing;