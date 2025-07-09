import './FoodCard.css';

export const FoodCard = ({ nombre, emoji }) => {
  return (
    <div className="card">
      <div style={{ fontSize: '3rem' }}>{emoji}</div>
      <h3>{nombre}</h3>
    </div>
  );
};
