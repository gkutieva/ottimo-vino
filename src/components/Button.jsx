import React from 'react'

const Button = ({ title, index, onClick, largebutton, productStyle }) => {
  return (
    <>
      { largebutton && !productStyle && <button className="red_btn" onClick={onClick} style={{ width: 365 }}>{title}</button>}
      { !largebutton && !productStyle && <button className="red_btn" onClick={onClick}>{title}</button>}
      {!largebutton && productStyle && <button className="red_btn" onClick={onClick} style={{ height: 49, width: 160, paddingTop: 12 }}>{title}</button>}
    </>
  )
}

export default Button