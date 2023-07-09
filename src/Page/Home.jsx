import React from 'react';
import{ Container ,Row ,Col} from "reactstrap"
import ds from './download.jpg'
import './home.css'
import Cards from '../Components/Cards/Cards';
import Header from '../Components/Header/Header';
import Main from '../Components/main/Main';
import plus from '../Assets/plus.png'
import toogle from '../Assets/toggle-button.png'
import sunny from '../Assets/sunny.png'
const Home = () => {
    return <div>
   
       <div className='uppers'>
          <img src={ds} alt='img' className='img'/>
          <div className="card__left1h">
             <img src={plus} alt='img' className='home-icon'/>
             <h6>New Delhi,India</h6>
             <p className='main-para'>Today,9 Jul</p>
                 </div>
           <div className="card__right1h">
              <img src={toogle} alt='img' className='home-icon'/>
               <p className='main-para'>6:00</p>
               <p className='main-para'>19:00</p>
            </div>
            <div className="card__middle1h">
               <i className="fa fa-angle-left" style={{color:"white",fontSize:"36px"}} />
               <span className='home-header'>32&deg;</span>
               <i className="fa fa-angle-right" style={{color:"white",fontSize:"36px"}} />
               <br/>
               <img src={sunny} alt='img' className='home-icon  mx-2'/>
               <span className='main-paras mx-2'>Sunny</span>
             
           
            </div>

        <div className='container'>
          <Main/>
          <div className="upcoming">
          <Header/>
          </div>
        <div >
            <Cards/>
        </div>
         </div>
         </div>
      
    

    </div>;
}



export default Home;