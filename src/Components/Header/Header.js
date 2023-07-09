import React from 'react';
import './header.css'
import sunny from '../../Assets/sunny.png'
import cloud from '../../Assets/clouds.png'
const CardsInfoLinks = [
    {
      degree: "25",
       percentage :"56%",
       icon : sunny,
    },
    {
        degree: "50",
        percentage :"32%",
        icon : cloud,
    },
    {
        degree: "23",
        percentage :"45%",
        icon : sunny,
    },
    {
        degree: "10",
        percentage :"26%",
        icon : sunny,
    },
    {
        degree: "30",
        percentage :"23%",
        icon : cloud,
    },
    {
        degree: "35",
        percentage :"15%",
        icon : sunny,
    },
    {
        degree: "19",
        percentage :"22%",
        icon : cloud,
    },
   
    {
        degree: "10",
        percentage :"26%",
        icon : sunny,
    },
    {
        degree: "19",
        percentage :"24%",
        icon : cloud,
    },]
const Header = () => {
    return <div>
     <div className='main-header'>
     <div className="card__left1">
             <h6>Upcoming hours</h6>
                 </div>
     <div className="card__right1">
     <button className='buttons'>Rain Precipitation &nbsp;
     <i class="fa fa-angle-down"></i>
    </button>
      <button className='button'>Next days &nbsp;
      <i className="fa fa-angle-right"></i> </button>
    </div>
               
        <div className='d-flex mains'>
          {CardsInfoLinks.map((items) => (<>
            <div className='d-flex  flex-column mx-4'>
              <div className='my-1 header-font '>{items.degree}&deg;</div>
              <img src={items.icon} className='header-icon' alt="img"/>
              <div class="vl my-1 mx-1"></div>
               <div className='my-1 header-font'>{items.percentage}</div>
           </div>
        
          </>))}
        
         </div>
         <div class="wrapper">
             <div class="wave1">
          
             </div>
              <div class="wave2"></div>
             <div class="wave3"></div>
    </div>  
    </div>
    </div>;
}

export default Header;