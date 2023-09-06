import { useParams } from "react-router-dom";
import "./ItemListContainer.css";


function ItemListContainer() {


   const { categoryId } = useParams();


   return (
      <div>
         ItemListContainer
      </div>
   )
}

export default ItemListContainer