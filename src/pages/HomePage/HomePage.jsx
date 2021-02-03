import React from 'react';
import Footer from '../Footer/Footer';
import './HomePage.css';
import NewOrderPage from '../NewOrderPage/NewOrderPage';


export default function HomePage() {
    return (
        <>
        // if user is falsy then render HomePage
        // else redner normal logged in view
        <NewOrderPage />

            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 ">
                            <h2 className="harmony">FEEL THE HARMONY <br /> WITHIN A SINGLE <br /> GLASS </h2>
                            <div>
                                <a href="#shop-wines" className="harmony_shop">SHOP WINES <span className="arrow">&#8594;</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg_black">
                <div className="container padd">
                    <div className="row history_border">
                        <div className="col-md-6">
                            <img src='https://imgur.com/8NdNK2c.png' alt='two' />
                        </div>
                        <div className="col-md-6">
                            <div className="italy">
                                <p className="italy_p">ITALY</p>
                                <h3 className="history_h3"> HISTORY <br />OF OUR WINE</h3>
                                <hr className="divder ma_0" />
                                <p className="history_par">Italy is romanticized for many reasons, not least of which for its delicious wines. The combination of ideal growing conditions, exceptional quality and great value make Italy a favorite region for procuring wine. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials" id="testimonial">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <div className="color_fff">
                                <h3 className="test_h3">TESTIMONIALS</h3>
                                <hr className="test_hr m-auto" />

                                <div className="test_pm">
                                    <p className="test_p">Kira Jones</p>
                                    <hr className="test_hr2 m-auto" />
                                    <div className="test-center">
                                        <p className="test_p2">I love your products and the customer support that your wonderful team provides. It means a lot to know that all your inquiries are taken care of. Thanks for your great work!”</p>
                                    </div>
                                </div>

                                <div>
                                    <a href="" className="test_btn">Update</a>
                                    <a href="" className="test_btn">Remove</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="BG_col">
                <div className="container">
                    <div className="row">
                        <div className="sub text-center text-white">
                            <h4 className="sub_h4">Receive invitations, updates and bonuses for purchasing</h4>
                            <div classname="arrow-email position-relative" style={{ position: 'relative' }}>
                                <input type="email" id="email" placeholder="ENTER EMAIL" className="emai_form position-relative" />
                                <span className="arrow" style={{ position: 'absolute', top: 36, right: 380 }}>&#8594;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )

}
