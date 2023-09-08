import { Item } from "../Item/Item";

export const ItemList = ({ myProducts }) => {
   if (Array.isArray(myProducts)) {
      return myProducts.map((product) => (
         <Item key={product.id} item={product} />
      ));
   } else {
      return null;
   }
};