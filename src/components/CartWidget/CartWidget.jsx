import { LiaShoppingBagSolid } from 'react-icons/lia';

const CartWidget = () => {
   return (
      <a href="#">
         <span>
            <LiaShoppingBagSolid />
            <span>0</span>
         </span>
      </a>
   )
};

export default CartWidget;