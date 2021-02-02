import React, { useState } from 'react';
import './Address.css'

export default function Address() {

    const [shipping, setShipping] = useState(false)
    const [billing, setBilling] = useState(true)
    const [confirm, setConfirm] = useState(false)

    const shippingHandler = () => {
        setShipping(true)
        setBilling(false)
        setConfirm(false)
    }
    const billingHandler = () => {
        setShipping(false)
        setBilling(true)
        setConfirm(false)
    }
    const confirmHandler = () => {
        setShipping(false)
        setBilling(false)
        setConfirm(true)
    }
    return (
        <>
            <section class="">
                <div class="container padd">
                    <div class="tab">
                        <button class={shipping ? "tablinks active" : "tablinks"} onClick={shippingHandler}>1. SHIPPING ADDRESS</button>
                        <button className={billing ? "tablinks tab_bord active" : "tablinks tab_bord"} id="defaultOpen" onClick={billingHandler}>2. BILLING METHOD</button>
                        <button class={confirm ? "tablinks active" : "tablinks"} onClick={confirmHandler} >3. CONFIRM</button>
                    </div>

                    {shipping && <div id="London" class="tabcontent" >

                        <div class="country">
                            <div class="w_2 chak_con"><h3>DELIVERY COUNTRY:</h3></div>
                            <div class="W_10 chak_con">
                                <select class="form_contr"
                                    id="exampleSelect1">
                                    <option>BULGARIA</option>
                                    <option>CHINA</option>
                                    <option>AMERICA</option>
                                    <option>UK</option>
                                    <option>LONDON</option>
                                </select>
                            </div>
                        </div>

                        <div class="country">

                            <form class="fomr_cen">
                                <h3>DELIVERY ADDRESS:</h3>
                                <div class="row  mar_form">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName" class="label_font">First name</label>
                                        <input type="text" class="form_input" id="firstName" />

                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName" class="label_font">Last name</label>
                                        <input type="text" class="form_input" id="lastName" />

                                    </div>
                                </div>

                                <div class="mb-3 mar_form">
                                    <label for="email" class="label_font">MOBILE NUMBER:</label>
                                    <input type="text" class="form_input" id="lastName" />
                                </div>

                                <div class="mb-3 mar_form">
                                    <label for="email" class="label_font">EMAIL ADDRESS:</label>
                                    <input type="text" class="form_input" id="lastName" />
                                </div>
                                <div class="mb-3 mar_form">
                                    <label for="email" class="label_font">PINCODE:</label>
                                    <input type="text" class="form_input" id="lastName" />
                                </div>
                                <div class="mb-3 mar_form">
                                    <label for="email" class="label_font">Email</label>
                                    <input type="text" class="form_input" id="lastName" />
                                </div>
                                <div class="mb-3 mar_form">
                                    <label for="email" class="label_font">ADDRESS 1</label>
                                    <input type="text" class="form_input" id="lastName" />
                                </div>
                                <div class="text-center mar_btn">
                                    <a href="" class="continue">CONTINUE</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    }
                    {billing && <div id="Paris" class="tabcontent">
                        <div class="country">
                            <div class="w_2 chak_con">

                                <div class="form-check">
                                    <label class="con label_font_bod">CASH ON DELIVERY
                                        <input type="checkbox" checked="checked" class="orm-check-input" id="flexCheckChecked" />
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="w_10 chak_con">
                                <div class="text-right">
                                    <span class="pro_pri text-left">$92.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-right mar_btn">
                            <a href="" class="continue">CONTINUE</a>
                        </div>
                    </div>
                    }

                    {confirm && <div id="Tokyo" class="tabcontent">
                        <h3>Tokyo</h3>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>
                    }

                </div>

            </section>
            
        </>
    )
}

