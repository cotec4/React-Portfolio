import React from "react";

//import pictures
import baml from "../img/baml.jpg";
import fp from "../img/Francisco_Partners1.png";

class Experience extends React.Component {
    render() {
        return (
            <section id="experience" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Experience</h3>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href={fp} data-lightbox="gallery-vmarine">
                                    <div className="work-img">
                                        <img src={fp} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Francisco Partners Consulting</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory"> Operating Associate</span>
                                                </div>
                                                <span className="w-date">December '18 - Current</span>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href={baml} data-lightbox="gallery-aguadeluz">
                                    <div className="work-img">
                                        <img src={baml} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Bank of America Merrill Lynch</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">
                                                        Financial Institutions Investment Banking Analyst</span>
                                                </div>
                                                <span className="w-date">July 2017 – November 2018</span>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href={baml} data-lightbox="gallery-todo">
                                    <div className="work-img">
                                        <img src={baml} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Bank of America Merrill Lynch</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">
                                                        Financial Institutions Investment Banking Analyst Summer Intern</span>
                                                </div>
                                                <span className="w-date">June 2016 – August 2016</span>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        );
    }
}

export default Experience;
