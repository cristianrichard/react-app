import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { products } from "../../data";


function ItemDetailContainer() {

   const [filteredItem, setFilteredItem] = useState();

   const { idItem } = useParams();


   useEffect(() => {
      getItem(idItem)
         .then((response) => setFilteredItem(response))
         .finally(
            setTimeout(() => {
               console.log("Prueba");
            }, 2000)
         );
   }, [idItem]);

   const getItem = (valueToFilter) => {
      return new Promise((resolve) => {
         resolve(products.find((item) => item.id === Number(valueToFilter)));
      });
   };

   return (
      <ItemDetail filteredItem={filteredItem} />
   )
};

export default ItemDetailContainer