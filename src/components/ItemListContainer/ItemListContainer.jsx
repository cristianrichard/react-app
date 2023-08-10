import './ItemListContainer.css';

const ItemListContainer = (props) => {
   return (
      <div className='item-list-container'>
         {props.greeting}
      </div>
   )
};

export default ItemListContainer;