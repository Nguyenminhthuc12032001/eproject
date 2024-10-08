import { Link } from "react-router-dom";
import { Email, Phone, LocationOn, Facebook, Instagram, Twitter, YouTube, HelpOutline, AccountTree } from '@mui/icons-material';

function Footer({ showContact }) {

    return (
        <div className="footer">

            <div className="row body">
                <div className="contentFooter col-12 col-lg-4">
                    <div className="row">
                        <Link className="col-6" href="/"><AccountTree style={{ fontSize: '3em' }} /> <h3>Site Map</h3></Link> <br />
                        <Link className="col-6" href="/"><HelpOutline style={{ fontSize: '3em' }} /> <h3>FAQ</h3></Link>
                    </div>
                </div>

                <div className="contentFooter col-12 col-lg-4" >
                    <h3>Newsletter Subscription</h3>
                    <input className="inputMail" type="email" id="newsletter-email" name="email" placeholder="Your email" />
                    <button className="btnSub btn btn-primary">Subscribe</button>
                    <div className="address">
                        <p><Email /> support@incrediblebridges.com</p>
                        <p><Phone /> +84 123 456 789</p>
                        <p><LocationOn />590 Cach Mang Thang 8, Ward 11, District 3, HCMC, Vietnam</p>
                        <p>Travel options to famous bridges: <a href="/travel-options">Learn more</a></p>
                        <p>© 2024 Incredible Bridges. All rights reserved.</p>
                    </div>
                </div>

                <div className="contentFooter col-12 col-lg-4" >
                    <div className="row">
                        <a className="col-3" href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Facebook style={{ fontSize: '2em' }} />
                        </a>
                        <a className="col-3" href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <Instagram style={{ fontSize: '2em' }} />
                        </a>
                        <a className="col-3" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <Twitter style={{ fontSize: '2em' }} />
                        </a>
                        <a className="col-3" href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                            <YouTube style={{ fontSize: '2em' }} />
                        </a>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default Footer;