import "./ItemCount.css";
import { useState } from "react";


function ItemCount() {

   const [initial, setInitial] = useState(1);

   const handleClick = (value) => {
      setInitial(initial + value);
   }


   return (
      <div>
         <div>
            <button onClick={() => handleClick(-1)}>-</button>
            <button onClick={() => handleClick(1)}>+</button>
         </div>
         <button>Agregar al carrito</button>
      </div>
   )
}

export default ItemCount