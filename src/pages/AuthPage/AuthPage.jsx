import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';



export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <main>
    <section className="banner">
<div className="container">
    <div className="row">
        <div className="col-xl-12 ">
          <h1 className='ot'>OTTIMO VINO</h1>
        <h2 className="harmony">FEEL THE HARMONY <br /> WITHIN A SINGLE <br /> GLASS </h2>
        <div>
                <a href="#shop-wines" className="harmony_shop">Login Or Sign up below</a>
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
          
      {showLogin ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
    

</main>
</>
  );
}