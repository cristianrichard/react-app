import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../../data";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";


function ItemListContainer() {

   const [myProducts, setMyProducts] = useState();

   const { idCategory } = useParams();

   useEffect(() => {
      getItems(idCategory).then((response) => setMyProducts(response))
   }, [idCategory])


   const getItems = (valueToFilter) => {
      return new Promise((resolve) => {
         if (valueToFilter === undefined) {
            resolve(products);
         } else {
            resolve(
               products.filter((item) => item.category === valueToFilter)
            );
         }
      });
   };


   return (
      <div>
         <div>
            {idCategory === undefined ? <div className="Prueba">Inicio</div> : idCategory}
         </div>
         <div>
            <ItemList myProducts={myProducts} />
         </div>
      </div>
   )
}

export default ItemListContainer;