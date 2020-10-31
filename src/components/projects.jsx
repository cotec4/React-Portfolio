import React from "react";

//import stock
import beers from "../img/beers.jpg";
import covid from "../img/covidImpact.jpg";

class Projects extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={beers} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={beers} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Show Me the Brews!</h2>
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
                  <a className="w-ctegory" href="https://mighty-mesa-69962.herokuapp.com/" target="_blank">
                    View Project</a>
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={covid} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={covid} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Pandemic Effects</h2>
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
                  <a className="w-ctegory" href="https://cotec4.github.io/Pandemic-Effects/" target="_blank">
                    View Project</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
