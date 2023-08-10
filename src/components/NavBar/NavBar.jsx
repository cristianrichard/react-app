import './NavBar.css';
import { GoPerson } from 'react-icons/go';
import { GoHeart } from 'react-icons/go';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { GoSearch } from 'react-icons/go';

const NavBar = () => {
   return (
      <>
         <header>
            <div>
               <a href="#">
                  <svg viewBox="100 100 50 32" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z" fill="black"></path></svg>
               </a>
            </div>
            <nav>
               <ul>
                  <li>
                     <a href="#">MUJER</a>
                  </li>
                  <li>
                     <a href="##">HOMBRE</a>
                  </li>
                  <li>
                     <a href="###">NIÑOS</a>
                  </li>
                  <li>
                     <a href="####">DEPORTE</a>
                  </li>
                  <li>
                     <a href="#####">MUNDO ADIDAS</a>
                  </li>
               </ul>
            </nav>
            <div>
               <div>
                  <input placeholder="Buscar" />
                  <div>
                     <span>
                        <GoSearch />
                     </span>
                  </div>
               </div>
               <a href="#">
                  <span>
                     <GoPerson />
                  </span>
               </a>
               <a href="#">
                  <span>
                     <GoHeart />
                  </span>
               </a>
               <a href="#">
                  <span>
                     <LiaShoppingBagSolid />
                  </span>
               </a>
            </div>
         </header>
      </>
   );
};

export default NavBar;