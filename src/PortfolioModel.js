import React from "react";
import Cabin from "./assets/img/portfolio/cabin.png"
import Cake from "./assets/img/portfolio/cake.png"
import Circus from "./assets/img/portfolio/circus.png"
import Game from "./assets/img/portfolio/game.png"
import Safe from "./assets/img/portfolio/safe.png"
import Submarine from "./assets/img/portfolio/submarine.png"
import "./styles.css"

const PortfolioModel = () => (
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                {/* <!-- Portfolio Modal - Title--> */}
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                                {/* <!-- Icon Divider--> */}
                                <div className="divider-custom">
                                    <div className="divider-custom-line"></div>
                                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div className="divider-custom-line"></div>
                                </div>
                                {/* <!-- Portfolio Modal - Image--> */}
                                <img className="img-fluid rounded mb-5" src={Cabin} alt="..." />
                                {/* <!-- Portfolio Modal - Text--> */}
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                    <i className="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default PortfolioModel;