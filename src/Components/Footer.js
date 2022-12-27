import React from 'react'
import "../CSS/support.css"

function Footer() {
    return (
        <>
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="logo-widget footer-widget">
                                    <div className="text">
                                        <p>Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure.</p>
                                    </div>
                                    <ul className="footer-social">
                                        <li><a href="!#" className='Lin'><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="!#" className='Lin'><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="!#" className='Lin'><i className="fab fa-vimeo-v"></i></a></li>
                                        <li><a href="!#" className='Lin'><i className="fab fa-google-plus-g"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                                <div className="service-widget footer-widget">
                                    <div className="footer-title">Services</div>
                                    <ul className="list">
                                        <li><a href="!#" className='Lin'>London</a></li>
                                        <li><a href="!#" className='Lin'>Canada</a></li>
                                        <li><a href="!#" className='Lin'>U.S</a></li>
                                        <li><a href="!#" className='Lin'>India</a></li>
                                        <li><a href="!#" className='Lin'>Malaysia</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- main-footer end --> */}
            <div className="footer-bottom" style={{backgroundColor : "rgb(27, 0, 18)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <div className="copyright"><a href="!#" className='Lin'>Kirubaharan M</a> &copy; Tasty Burger</div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <ul className="footer-nav">
                                <li><a href="!#" className='Lin'>Terms of Service</a></li>
                                <li><a href="!#" className='Lin'>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer