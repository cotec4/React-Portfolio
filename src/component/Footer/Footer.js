import React from 'react';
import "../bootstrap.css";
import "../font-awesome.css";
import "../styles.scss";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 copyright">
                        <p>
                            Copyright &copy; 2020 Connor Cote
                    </p>
                    </div>
                    <div className="col-sm-2 top">
                        <span id="to-top">
                            <i className="fa fa-chevron-up" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="col-sm-5 social">
                        <ul>
                            <li>
                                <a href="https://github.com/cotec4" target="_blank" rel="noreferrer"><i className="fa fa-github"
                                    aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/cotec4/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"
                                    aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/connor-r-cote/" target="_blank" rel="noreferrer"><i
                                    className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/connor.cote/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"
                                    aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/connor__cote" target="_blank" rel="noreferrer"><i className="fa fa-twitter"
                                    aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;