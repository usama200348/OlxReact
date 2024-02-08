import "./card.css";
import { useNavigate } from "react-router-dom";

function Cards(props) {
  const { price, title, id, thumbnail } = props.item;
  const navigate = useNavigate();

  return (
    // <div className="containeer">
    <div className="card" onClick={() => navigate(`detail/${id}`)}>
      <img src={props.item.image} alt={props.item.title} />
      <div className="overlay">
        <div className="overlay-text">
          {/* <h3>{props.item.title}</h3> */}
          <p>{props.item.description}</p>
        </div>
      </div>
      <div className="card-content">
        <p className="price">Rs {props.item.amount}</p>
        <p className="title">{props.item.title}</p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
    // </div>
  );
}

export default Cards;
