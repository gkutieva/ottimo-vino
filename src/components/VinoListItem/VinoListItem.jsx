import './VinoListItem.css';

export default function VinoListItem({ vinoItem, handleAddToOrder }) {
  return (
    <>
    <div className="VinoListItem">
      <div className="container padd">
      <div className="row">
          <div className="col-md-4 red_bg">
            <img src={vinoItem.image} alt='wine pictures' />
        </div>
      </div>
      </div>
      <div className="name">{vinoItem.name}</div>
      <div className="buy">
        <span>${vinoItem.price}</span>
        <button className="btn is-small" onClick={() => handleAddToOrder(vinoItem._id)}>
          ADD
        </button>
      </div>
    </div>
  </>
  );
}

