import banner from '../../assets/banner.avif';
import "./Banner.css";

const Banner = () => {
   return (
      <>
         <img src={banner} alt="banner ecommerce" className='banner-img' />  {/*Después este banner cambia, esta img es a modo prueba*/}
         <button className='banner-btn'>Go shop now!</button>
      </>
   )
};

export default Banner;