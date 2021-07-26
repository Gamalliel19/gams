import React from 'react'

const Footer = () => {
    return(
        <>
        <div className="container-footer">
            <div>
                <div className="deskripsi">
                    <p>Want to collaborate to solve problems and real world challenge? <br/> Feel free to get in touch with me!</p>
                </div>
                <a href="mailto:sharongamalliel@gmail.com" className="btn">Get In Touch!</a>
            </div>
        </div>
        <div className="footer-links">
            <div className="copyright">
                © 2021 Gamalliel Sharon, Front-End Engineer.
            </div>
            <div className="social-links">
                <ul>
                    <li><a href="https://www.facebook.com/jack.g.wilshere.3/">FB</a></li>
                    <li><a href="https://twitter.com/Gamalliel19">TW</a></li>
                    <li><a href="https://github.com/Gamalliel19">GH</a></li>
                    <li><a href="https://www.instagram.com/gmllshrn/">IG</a></li>
                    <li><a href="https://dribbble.com/gamalliel19">DB</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Footer;