import React from 'react';

import './cards.css'
import Humidity from './Humidity/Humidity';
import Precipitation from './Precipitation/Precipitation';
import Wind from './Wind/Wind';
import Uvindex from './UV index/Uvindex';
import Feel from './Feels/Feel'
import Rain from './Rain/Rain';
import humidity from '../../Assets/water-droplet.png'
import wind from '../../Assets/wind.png'
import precipitation from '../../Assets/raining.png'
import chances from '../../Assets/rains.png'
import feels from '../../Assets/thermometer.png'
import uvindex from '../../Assets/uv-index.png'

const CardsInfoLinks = [
    {
      date: "11",
      day :"Jan",
      title:"Humidity",
      subtitle: <Humidity/>,
      description : humidity,
   
    },
    {
        date: "11",
        day :"Jan",
        title:"Wind",
        subtitle: <Wind/>,
        description : wind,
      
    },
    {
        date: "11",
        day :"Jan",
        title:"Pecipetation",
        subtitle:<Precipitation/>,
        description : precipitation,
       
    },
    
    ];
    const CardsInfoLinks1 = [
        {
          date: "11",
          day :"Jan",
          title:"Uv Index",
          subtitle:<Uvindex/>,
          description :uvindex,
        
        },
        {
            date: "11",
            day :"Jan",
            title:"Feels Like",
            subtitle: <Feel/>,
            description : feels,
         
        },
        {
            date: "11",
            day :"Jan",
            title:"Chances of Rain",
            subtitle:<Rain/>,
            description : chances,
          
        },
      
       
        ];
const Cards = () => {

  
    return <div>
          <div><p className='details'>More Detail of today's weather</p></div>
        <div className=' upper'>
        
        {CardsInfoLinks.map((items) => (<>
                 <article className="card">
                 <div class="card__left">
             <p>   {items.title}</p>
                 </div>
                
              <img src={items.description}  class="card__right"alt="img"/>
                
                
            <div class="card__body">
         {items.subtitle}
            </div>
           
        </article>
                 </>
              ))}

    </div>
   
    <div className=' upper'>
      
        {CardsInfoLinks1.map((items) => (<>
                 <article className="card">
                 <div class="card__left">
                 <p>{items.title}</p>
                 </div>
                 <img src={items.description}  class="card__right"alt="img"/>
                
            <div class="card__body">
            {items.subtitle}
            </div>
           
        </article>
                 </>
              ))}


    </div>

    </div>;
}



export default Cards;