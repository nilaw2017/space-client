import {Component} from 'react'
import './aboutUs.css'

export default class AboutUsPage extends Component {
    render() {
        return(
            <section className="mt-5 container">
                    <div className="about-text-area ptb-100">
                        <div>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-safe-text">
                                        <h2 className="pseudo-left position-relative">Safe, Faster And Easy Solution For Shipping</h2>
                                        <p className="text-center text-lg-left">Nepal is one of the country which has reported a great number or import trade with China. Importing goods from China to Nepal requires a lot of stringent and lengthy process. We will assist you to conduct this in an easy way and deliver you in the best price along with the best service. Our company provides you the excellent service for importing goods from China to Nepal. </p>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-6 mt-5">
                                    <div className="safe-image">
                                        <img className="img-cover" src="https://templates.hibootstrap.com/ferry/default/assets/img/speciality/speciality2.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center mt-5">
                                <div className="col-lg-6">
                                    <div className="safe-image">
                                        <img className="img-cover" src="https://templates.hibootstrap.com/ferry/default/assets/img/speciality/speciality2.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <div className="about-safe-text">
                                        <h2 className="pseudo-left position-relative">Objective</h2>
                                        <p className="text-center text-lg-left">It is our objective to deliver your commodities from China to Nepal via air, road, or sea. If you have business products that need to be imported from China but you need somebody's helping hand, we can do it for you. We will bring the products in the best way possible with the care of your product and deliver it to your store/doorstep.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}