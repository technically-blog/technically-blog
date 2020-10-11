
const Footer =  () => {
    return (
        <React.Fragment>
            <footer className="site-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-8">
                                    <h6>About</h6>
                                    <p className="text-justify">www.inbrief.dev <strong>IS A MULTIUSER BLOGGING PLATFORM </strong> 
                                        an initiative to help the upcoming programmers with the coding blogs on all latest technologies.
                                        if you have a idea we publish that and you make revenue on the basis of your 
                                        content engagement & content reach.
                                    </p>
                                </div>

                                <div className="col-xs-6 col-md-4">
                                    <h6>Quick Links</h6>
                                    <ul className="footer-links">
                                    <li><a href="http://inbrief.dev/about/">About Us</a></li>
                                    <li><a href="http://inbrief.dev/contact/">Contact Us</a></li>
                                    <li><a href="http://inbrief.dev/contribute-at-scanfcode/">Contribute</a></li>
                                    <li><a href="http://inbrief.dev/privacy-policy/">Privacy Policy</a></li>
                                    <li><a href="http://inbrief.dev/sitemap/">Sitemap</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
                            <a href="www.inbrief.dev"> In Brief</a>.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                                </ul>
                            </div>
                            </div>
                        </div>
                </footer>
        </React.Fragment>
    )
}

export default Footer;