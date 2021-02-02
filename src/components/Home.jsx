
// import React, { useContext, useEffect, useState } from 'react'
// import Header from './Header'
// import Footer from './Footer';
// import Button from './Button';


// const Home = (props) => {

//     let cart = [];
//     let data = [];
//     useEffect(() => {
//         if (localStorage.getItem('cart')) {
//             cart = JSON.parse(localStorage.getItem('cart'))
//         }
//     }, [data])

//     const handleCart = item => {
//         item.quantity = 1;
//         cart.push(item);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         props.history.push({ pathname: '/Cart' })
//     };

//     const productData = item => {
//         data.push(item)
//         props.history.push({ pathname: '/product' })
//         localStorage.setItem('product', JSON.stringify(data));
//     }

//     return (
//         <div>
//             <Header />

//             <section className="banner">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xl-12 ">
//                             <h2 className="harmony">FEEL THE HARMONY <br /> WITHIN A SINGLE <br /> GLASS </h2>
//                             <div>
//                                 <a href="#shop-wines" className="harmony_shop">SHOP WINES <span className="arrow">&#8594;</span></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="bg_black">
//                 <div className="container padd">
//                     <div className="row history_border">
//                         <div className="col-md-6">
//                             <img src={exceptionalWines} />
//                         </div>
//                         <div className="col-md-6">
//                             <div className="italy">
//                                 <p className="italy_p">ITALY</p>
//                                 <h3 className="history_h3"> HISTORY <br />OF OUR WINE</h3>
//                                 <hr className="divder ma_0" />
//                                 <p className="history_par">Italy is romanticized for many reasons, not least of which for its delicious wines. The combination of ideal growing conditions, exceptional quality and great value make Italy a favorite region for procuring wine. </p>
//                                 <Button title="READ MORE" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="container padd " id="shop-wines">
//                 <div className="row">
//                     <div className="col-md-12 pro_tb">
//                         <h2 className="history_h3 text-center ">RED WINE</h2>
//                         <hr className="divder m-auto hr_w text-center" />
//                     </div>
//                     <div className="row">
//                         {redWineData.map((item, index) => (
//                             <div className="col-sm-6 col-md-3 padd_r" key={index}>
//                                 <div className="text-center red_bg">
//                                     <div className="red_p">
//                                         <div onClick={() => productData(item)}>
//                                             <img src={item.image} alt="Not any image" />
//                                             <div className="pro_title">
//                                                 <h3 style={{ height: 62 }}>{item.name}</h3>
//                                             </div>
//                                             <p>$ {item.price}</p>
//                                         </div>
//                                         <Button title="ADD TO CART" onClick={() => handleCart(item)} index={index} />
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                         )}
//                     </div>

//                 </div>

//                 <div className="row">
//                     <div className="col-md-12 pro_tm pro_tb">
//                         <h2 className="history_h3 text-center">WHITE WINE</h2>
//                         <hr className="divder m-auto hr_w text-center" />
//                     </div>
//                     <div className="row">
//                         {whiteWhineData.map((item, index) => (
//                             <div className="col-md-3 padd_r" key={index}>
//                                 <div className="text-center red_bg">
//                                     <div className="red_p">
//                                         <div onClick={() => productData(item)}>
//                                             <img src={item.image} />
//                                             <div className="pro_title">
//                                                 <h3 style={{ height: 52 }}> {item.name}</h3>
//                                             </div>
//                                             <p>$ {item.price}</p>
//                                         </div>
//                                         <Button title="ADD TO CART" onClick={() => handleCart(item)} index={index} />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                     <div className="row">
//                         <div className="col-md-12 pro_tm pro_tb">
//                             <h2 className="history_h3 text-center">ROSE WINE</h2>
//                             <hr className="divder m-auto hr_w text-center" />
//                         </div>
//                         <div className="row">
//                             {roseWineData.map((item, index) => (
//                                 <div className="col-md-3 padd_r" key={index}>
//                                     <div className="text-center red_bg">
//                                         <div className="red_p">
//                                             <div onClick={() => productData(item)}>
//                                                 <img src={item.image} />
//                                                 <div className="pro_title">
//                                                     <h3 style={{ height: 62 }}>{item.name}</h3>
//                                                 </div>
//                                                 <p>$ {item.price}</p>
//                                             </div>
//                                             <Button title="ADD TO CART" onClick={() => handleCart(item)} index={index} />
//                                         </div>
//                                     </div>
//                                 </div>

//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="testimonials" id="testimonial">
//                 <div className="container">
//                     <div className="row text-center">
//                         <div className="col-md-12">
//                             <div className="color_fff">
//                                 <h3 className="test_h3">TESTIMONIALS</h3>
//                                 <hr className="test_hr m-auto" />

//                                 <div className="test_pm">
//                                     <p className="test_p">Kira Jones</p>
//                                     <hr className="test_hr2 m-auto" />
//                                     <div className="test-center">
//                                         <p className="test_p2">I love your products and the customer support that your wonderful team provides. It means a lot to know that all your inquiries are taken care of. Thanks for your great work!”</p>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <a href="" className="test_btn">Update</a>
//                                     <a href="" className="test_btn">Remove</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="BG_col">
//                 <div className="container">
//                     <div className="row">
//                         <div className="sub text-center text-white">
//                             <h4 className="sub_h4">Receive invitations, updates and bonuses for purchasing</h4>
//                             <div classname="arrow-email position-relative" style={{ position: 'relative' }}>
//                                 <input type="email" id="email" placeholder="ENTER EMAIL" className="emai_form position-relative" />
//                                 <span className="arrow" style={{ position: 'absolute', top: 36, right: 380 }}>&#8594;</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     )
// }

// export default Home