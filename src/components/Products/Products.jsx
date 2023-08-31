import { useContext } from "react";
import { dataContext } from "../DataContext/DataContext";
import "./Products.css";

const Products = () => {

   const { data } = useContext(dataContext);

   return data.map((product) => {
      return (
         <div key={product.id}>
            <img src={product.img} alt="imágen producto" />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <button>Buy</button>
         </div>
      )
   })
};

export default Products;