import "./ItemCount.css";
import { useState } from "react";


export const ItemCount = ({ stock }) => {

   const [initial, setInitial] = useState(1);

   const [errorStock, setErrorStock] = useState(false);

   const handleClick = (value) => {
      if (initial + value > 0 && initial + value <= stock) {
         setInitial(initial + value);
         setErrorStock(false);
      } else {
         initial + value >= stock && setErrorStock(true);
      }
   }


   return (
      <div>
         <div>
            <button onClick={() => handleClick(-1)}>-</button>
            <button onClick={() => handleClick(1)}>+</button>
         </div>
         <button>Agregar al carrito</button>
         {errorStock && (
            <div>
               Se alcanzó el máximo disponible
            </div>
         )}
      </div>
   )
};