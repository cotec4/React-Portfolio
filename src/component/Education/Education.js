import React from 'react';
import "../bootstrap.css";
import "../font-awesome.css";
import "../styles.scss";

function Education() {
    return (
        <div id="education">
            <h2 className="heading">Education</h2>
            <div className="education-block">
                <h3>Boston College</h3>
                <span className="education-date">Sept 2013 - May 2017</span>
                <h4>Bachelor of Science in Management Concentrating in Finance and Accounting with a French Language Minor
            </h4>
                <p>
                    I attended Boston College from fall semester in 2013 to my graduation in spring 2017. During my time at
                    BC, I focused on business and double-majored in Finance and Accounting while continuing my studies in
                    the French language after having taken AP French in high school. I focused on my French skills during my
                    time abroad in Paris studying at ESCP-Europe (Paris Campus) in the fall of 2015. I have always had a
                    passion for traveling and exploring other cultures, which is one of the many reasons why I decided to go
                    abroad the following spring semester (spring 2016) to Hong Kong where I studied at Hong Kong University
                    of Science and Technology and was able to explore China, South Korea and most of Southeast Asia.
            </p>
            </div>

            <div className="education-block">
                <h3>Boston College</h3>
                <span className="education-date">Sept 2013 - May 2017</span>
                <h4>Student Athlete / World Traveler</h4>
                <ul>
                    <li>
                        Rowed for the BC Men's Crew team for all 3 years I was on campus.
                </li>
                    <li>
                        Traveled to over 4 continents and 20 countries while focusing on becoming conversationaly fluent in
                        French and picking up a little Cantonese.
                </li>
                    <li>
                        Made life-long friends who I lived with in New York and will stay close to for my whole life.
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Education;
