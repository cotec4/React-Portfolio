import React from 'react';
import "../bootstrap.css";
import "../font-awesome.css";
import "../styles.scss";

function Experience() {
    return (
        <div id="experience" className="background-alt">
            <h2 className="heading">Experience</h2>
            <div id="experience-timeline">
                <div data-date="December 2018 – Present">
                    <h3>Francisco Partners Consulting</h3>
                    <h4>Operating Associate</h4>
                    <p>
                        Currently, I am an operating associate at Francisco Partners Consulting. Francisco Partners is a
                        middle-market technology focused private equity firm, and Francisco Partners Consulting is the
                        consulting arm of the firm. My group is made up of ~25 professionals. The 25 of us work with the
                        investment team throughout the life cycle of our investments to get the best possible return for our
                        limited partners. As part of goal to progress in my career, I need to be able to effectively
                        communicate with our technology and product leaders of our portfolio companies; hence, my interest
                        in this bootcamp.
                </p>
                </div>

                <div data-date="July 2017 – November 2018">
                    <h3>Bank of America Merrill Lynch</h3>
                    <h4>Financial Institutions Investment Banking Analyst</h4>
                    <p>
                        Coming out of college, I began my career as an investment banking analyst in the financial
                        institutions group at Bank of America Merrill Lynch. Wtihin this group, I worked primarily with the
                        insurance, speciality finance and depository sub-groups. I worked on such deals as teh CoBiz
                        Financial sale to Bank of Oklahoma for $977 million as well as the QBE Insurance sale of its Latin
                        American operations to Zurich Financial. Investment banking is a very demanding job where I spent
                        many hours focused on financial modeling and valuation. The skills I learned (both in terms of
                        modeling and financial knowledge as well as knowing my limits and how far I can push myself) helped
                        propel me to seek new opportunities on the operating side rather than the investing side of finance.
                </p>
                </div>

                <div data-date="June 2016 – August 2016">
                    <h3>Bank of America Merrill Lynch</h3>
                    <h4>Financial Institutions Investment Banking Analyst Summer Intern</h4>
                    <p>
                        During the summer between my juinor year (abroad as I mentioned above) and my senior year at Boston
                        College, I interned in the Financial Institutions group at Bank of America Merrill Lynch. I was one
                        of 14 interns that summer and was one of the 9 who received return offers to begin full time with
                        the group the following year. The summer in New York and the friends I made within my intern class
                        made the decision to return easy.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Experience;