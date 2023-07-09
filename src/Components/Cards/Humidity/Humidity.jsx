import React from 'react';
import './humidity.css'
const CardsInfoLinks = [
    {
      width: "100%",
       title :"good",
    },
    {
        width: "50%",
        title :"normal",
    },
    {
        width: "30%",
        title :"bad",
    },]
const Humidity = () => {
    return <div >

        <div className='d-flex justify-content-center header'>
            <h4>75%</h4>
            <p className='para'>bad</p>
        </div>
        <div className='d-flex '>
          {CardsInfoLinks.map((items) => (<>
        <div style={{height:" 100%", width: "100%"}}>
	<div className="col1 mx-1">
		<p className='paras'>{items.title}</p>
		<div className="meter" style={{width :"50px"}}>
			<span style= {{width :items.width}}></span>
		</div>
	</div> 
   </div></>  ))}
   </div>
    </div>;
}


export default Humidity;