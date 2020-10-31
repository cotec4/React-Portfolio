import React from "react";

//import stock
import stock from "../img/homework.jpg";

class Homework extends React.Component {
    render() {
        return (
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Homework</h3>
                                <p className="subtitle-a">
                                    Incididunt nostrud id aute culpa excepteur pariatur consequat
                                    elit culpa nulla enim anim incididunt.
                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href={stock} data-lightbox="gallery-vmarine">
                                    <div className="work-img">
                                        <img src={stock} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Employee Management Homework</h2>
                                                <div className="w-more">
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <span className="work-content">
                                    <a className="w-ctegory" href="https://github.com/cotec4/Employee-Tracker" target="_blank">
                                        View Project</a>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href={stock} data-lightbox="gallery-aguadeluz">
                                    <div className="work-img">
                                        <img src={stock} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Weather Dashboard</h2>
                                                <div className="w-more">
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <span className="work-content">
                                    <a className="w-ctegory" href="https://cotec4.github.io/Weather-Dashboard/" target="_blank">
                                        View Project</a>
                                </span>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-4">
                                <div className="work-box">
                                    <a href={stock} data-lightbox="gallery-smth">
                                        <div className="work-img">
                                            <img src={stock} alt="" className="img-fluid" />
                                        </div>
                                        <div className="work-content">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h2 className="w-title">Work Day Scheduler Homework</h2>
                                                    <div className="w-more">
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="w-like">
                                                        <span className="ion-ios-plus-outline"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <span className="work-content">
                                        <a className="w-ctegory" href="https://cotec4.github.io/Work-Day-Scheduler/" target="_blank">
                                            View Project</a>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-box">
                                    <a href={stock} data-lightbox="gallery-mf">
                                        <div className="work-img">
                                            <img src={stock} alt="" className="img-fluid" />
                                        </div>
                                        <div className="work-content">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h2 className="w-title">Note Taker Homework</h2>
                                                    <div className="w-more">
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="w-like">
                                                        <span className="ion-ios-plus-outline"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <span className="work-content">
                                        <a className="w-ctegory" href="https://cryptic-retreat-39842.herokuapp.com/" target="_blank">
                                            View Project</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Homework;
