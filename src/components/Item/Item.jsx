import "./Item.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


export const Item = ({ item }) => {

   return (
      <div>
         <h2 className="item-title">{item.title}</h2>
         <img className="item-img" src={item.img} alt={item.title} />
         <p className="item-price">{item.price}</p>
         <ItemCount stock={item.stock} />
         <Link to={`/items/${item.id}`}>Ver detalle</Link>
      </div>
   )
};
