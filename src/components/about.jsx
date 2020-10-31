import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "60%", value: "60" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "MicrosoftOffice_Skill",
          content: "MicrosoftOffice",
          porcentage: "85%",
          value: "85"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Connor Cote. I have three older siblings, four nephews (soon to have one niece), many many cousins and spend the majority of my time focused on family, friends and work. I am in this class primarily to help my current career in the technology consulting field. I have a business background and want to learn more about web development and coding in particular."
        },
        {
          id: "second-p-about",
          content:
            "My story really starts in Atlanta where I was born and raised. I attended Saint elementary school before attending Marist School starting in 7th grade. After Marist, I attended Boston College (a school where I felt at home since all three of my siblings, my parents and my in-laws also attended)."
        },
        {
          id: "third-p-about",
          content:
            "At Boston College, I majored in Finance and Accounting with a French language minor. I also had the opportunity to spend some time abroad during my junior year spending first semester in Paris, France (I was there in during the 2015 bombings and terrorist attack and am happy to discuss it if you are interested). I spent second semester in Hong Kong and traveled throughout Southeast Asia."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
