import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ filteredItem }) => {
   if (!filteredItem) {
      return <div>Cargando...</div>;
   }

   return (
      <div>
         <h2>{filteredItem.title}</h2>
         <img src={filteredItem.img} alt={filteredItem.title} />
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, ex?</p>
         <div>${filteredItem.price}</div>
         <div> Stock disponible {filteredItem.stock}</div>
         <span>
            {filteredItem.description}
         </span>
         <ItemCount stock={filteredItem.stock} />
      </div>
   );
};