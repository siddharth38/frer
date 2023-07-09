import React from 'react';
import './main.css'
import man from '../../Assets/man.png'
import more from '../../Assets/more.png'
const Main = () => {
    return <div>
   <div className="card__left1m">
             <h6>Welcome back Siddharth!</h6>
             <p className='main-para'>Check Out weather Information</p>
                 </div>
     <div className="card__right1m">
     <img src={more} className='main-icon' alt="img"/>
     <img src={man} className='main-icon' alt="img"/>
    </div>
    </div>;
}

export default Main;