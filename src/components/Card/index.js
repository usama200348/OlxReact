import "./card.css";
import { useNavigate } from "react-router-dom";

function Cards(props) {
  const {  price, title, id ,thumbnail } = props.item;
  const navigate = useNavigate();

  

  return (
      <div className="card" 
      onClick={() => navigate(`detail/${id}`)}
        style={{ border: '1px solid black', width: 200, height: 300, margin: 20 }}>
          <img width={200} height={100} src={thumbnail} alt={title} />
          <h1 className="price">Rs. {price}</h1>
          <h4 className="title">{title}</h4>
      </div>
  );
}
export default Cards;
