import "./Item.css";
import { Link } from "react-router-dom";



function Item({ item }) {

   return (
      <div>
         <h2 className="Item-title">{item.title}</h2>
         <img className="Item-img" src={item.img} alt={item.title} />
         <span className="Item-price">{item.price}</span>
         <Link to={`/items/${item.id}`}>Ver detalle</Link>
      </div>
   )
};

export default Item;