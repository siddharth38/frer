import React from 'react';

const Precipitation = () => {
    const CardsInfoLinks = [
        {
          width: "100%",
           title :"0",
        },
        {
            width: "75%",
            title :"15",
        },
        {
            width: "50%",
            title :"30",
        },
        {
            width: "0%",
            title :"45",
        },
        {
            width: "0%",
            title :"60",
        },
        {
            width: "0%",
            title :"75",
        },
        {
            width: "0%",
            title :"90",
        },]
    return <div>
        <div className='d-flex justify-content-center header'>
            <h4>3.5</h4>
            <p className='para'>cm</p>
        </div>
         <div className='d-flex '>
          {CardsInfoLinks.map((items) => (<>
        <div style={{height:" 100%", width: "100%"}}>
	<div className="col1 mx-1">
		<p className='paras'>{items.title}</p>
		<div className="meter" style={{width :"20px"}}>
			<span style= {{width :items.width}}></span>
		</div>
	</div> 
   </div></>  ))}
   </div>
    </div>;
}


export default Precipitation;