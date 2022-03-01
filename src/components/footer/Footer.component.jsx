import {Component} from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const FACEBOOK_LINK = "https://www.facebook.com/spaceenterprises799";
const INSTAGRAM_LINK = "https://www.instagram.com/spaceenterprises799/?utm_medium=copy_link&fbclid=IwAR1838Ni-4yypeSqep9e7BsG80oo8EKCW1kGZnfGo29V8dYwVpcm5Hjp3B4";
const LINKEDIN_LINK = "https://www.linkedin.com/company/spaceenterprises799/";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-bottom mt-5">
                <section className="d-flex container pt-5">
                    <div>
                        <img className="footer-logo" src={`${process.env.PUBLIC_URL}/assets/images/spaceEnterpriseLOGO.png`} />
                    </div>
                    <div className="text-white pl-5">
                        <h2 className="connect-with-us position-relative">Connect with us:</h2>
                        <div className="text-center">
                            <a href={FACEBOOK_LINK} target="_blank">
                                <i className="fa fa-facebook p-2 m-2 social-links" aria-hidden="true"></i>
                            </a>
                            <a href={INSTAGRAM_LINK}>
                                <i className="fa fa-instagram p-2 m-2 social-links" aria-hidden="true"></i>
                            </a>
                            <a href={LINKEDIN_LINK}>
                                <i className="fa fa-linkedin p-2 m-2 social-links" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <p>Designed and Developed by <a href="https://hibootstrap.com/" target="_blank">Nilaw</a></p>
                </div>
            </div>
        )
    }
}