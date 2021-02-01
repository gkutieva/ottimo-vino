import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Footer from './Footer'

const Product = () => {
  const [counte, setcounte] = useState(1)
  const addValue = () => {
    setcounte(counte => counte + 1)
  }
  const minusValue = () => {
    counte > 1 && setcounte(counte => counte - 1)
  }

  let productData = JSON.parse(localStorage.getItem('product'))

  return (
    <>
      <Header />
      {productData.map((item) => (
        <section className="">
          <div className="container padd">
            <div className="row">
              <div className="col-md-4 red_bg">
                <img src={item.image} />
              </div>
              <div className="col-md-8 pro_lp">
                <h2 className="pro-tit">{item.name}</h2>
                <span className="pro_pri">${item.price}</span>
                <p className="pro_par">Wild berry, iris, menthol, star anise and new leather aromas follow over to the precise, fullbodied palate along with juicy cherry, raspberry compote and tobacco. Boasting elegance and structure in equal measure, it has taut, refined tannins and fresh acidity that will give this decades of drinking pleasure. Drink 2026–2056. Rosenthal Wine Merchant. —Kerin O’Keefe</p>

                <div>
                  <div className="num-block skin-2">
                    <div className="num-in">
                      <span className="minus dis" onClick={minusValue}></span>
                      <input type="text" className="in-num" value={counte} readOnly="" />
                      <span className="plus" onClick={addValue}></span>
                    </div>
                    <div>
                      <Button title="ADD TO CART" productStyle="Product style" />
                     </div>
                  </div>

                </div>

                <table className="table_font">
                  <tr>
                    <td className="li_p">DESIGNATION</td>
                    <td className="li_col li_p">Garblèt Suè</td>
                  </tr>
                  <tr>
                    <td className="li_p">VARIETY</td>
                    <td className="li_col li_p">Nebbiolo</td>
                  </tr>
                  <tr>
                    <td className="li_p">APPELLATION</td>
                    <td className="li_col li_p">Barolo, Piedmont, Italy</td>
                  </tr>
                  <tr>
                    <td className="li_p">WINERY</td>
                    <td className="li_col li_p">Brovia</td>
                  </tr>
                  <tr>
                    <td className="li_p">ALCOHOL</td>
                    <td className="li_col li_p">14.5%</td>
                  </tr>
                  <tr>
                    <td className="li_p">BOTTLE SIZE</td>
                    <td className="li_col li_p">750 ml</td>
                  </tr>
                  <tr>
                    <td className="li_p">CATEGORY</td>
                    <td className="li_col li_p">Red</td>
                  </tr>
                </table>

              </div>
            </div>

          </div>
        </section>
      ))}
      <Footer />
    </>
  )
}

export default Product