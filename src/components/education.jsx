import React from "react";

//import pictures
import bc from "../img/boston-college.png";
import marist from "../img/marist.png";

class Education extends React.Component {
    render() {
        return (
            <section id="experience" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Education</h3>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href={bc} data-lightbox="gallery-vmarine">
                                    <div className="work-img">
                                        <img src={bc} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Boston College</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Bachelor of Science in Management Concentrating in Finance and Accounting with a French Language Minor</span>
                                                </div>
                                                <span className="w-date">Sept 2013 - May 2017</span>
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
                                <a href={marist} data-lightbox="gallery-todo">
                                    <div className="work-img">
                                        <img src={marist} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Marist School</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">
                                                        High School Graduate</span>
                                                </div>
                                                <span className="w-date">August 2007 – May 2013</span>
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

export default Education;
