import './VinoList.css';
import VinoListItem from '../VinoListItem/VinoListItem';

export default function VinoList({ vinoItems, handleAddToOrder }) {
  const items = vinoItems.map(item =>
    <VinoListItem
      key={item._id}
      vinoItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="VinoList">
      {items}
    </main>
  );
}
