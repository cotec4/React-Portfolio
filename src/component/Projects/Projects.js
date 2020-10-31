import React from 'react';
import "../bootstrap.css";
import "../font-awesome.css";
import "../styles.scss";

function Projects() {
    return (
        <div id="projects" className="background-alt">
            <h2 className="heading">Projects</h2>
            <div className="container">
                <div className="row">
                    <div className="project shadow-large">
                        <div className="project-image">
                            <img alt="" src="../../Assets/images/project.jpg" />
                        </div>
                        <div className="project-info">
                            <h3>Show Me the Brews!</h3>
                            <p>
                                This project is a Node server based Heroku app using Sequelize! We are using the Google Maps
                                API, Zip Code API, and Brewery API to get data based on the User's requests and provide them
                                with a map based on location of the nearby breweries. Beer lovers can use this app to help
                                them find craft or micro breweries around them, or this app can help the beer lovers find
                                cool places to visit where there are many micro-breweries.
                        </p>
                            <a href="https://mighty-mesa-69962.herokuapp.com/" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                    </div>

                    <div className="project shadow-large">
                        <div className="project-image">
                            <img alt="" src="../../Assets/images/project.jpg" />
                        </div>
                        <div className="project-info">
                            <h3>Pandemic Effects</h3>
                            <p>
                                The COVID-19 global pandemic has changed every industry, probably permanently. This app
                                allows the user to search for a keyword and compare the news headlines associated with that
                                keyword before the pandemic began with the time now that the pandemic has begun. The app
                                uses either the New York Times or the Guardian headlines as the source for all headlines
                                which we then consolidate and rank in order of appearance to inform the user of what are the
                                most commonly associated words in the headlines with the search term.
                        </p>
                            <a href="https://cotec4.github.io/Pandemic-Effects/" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;