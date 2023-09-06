import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
      <>
         <header>

            <div>
               <Link to={"/"}>
                  <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black"></path></svg>
               </Link>
            </div>

            <nav>
               <ul>
                  <li>
                     <Link to={"/category/mujer"}>MUJER</Link>
                  </li>
                  <li>
                     <Link to={"/category/hombre"}>HOMBRE</Link>
                  </li>
                  <li>
                     <Link to={"/category/niños"}>NIÑOS</Link>
                  </li>
               </ul>
            </nav>

            <Link to={"/cart"}>
               <CartWidget />
            </Link>

         </header>
      </>
   );
};

export default NavBar;