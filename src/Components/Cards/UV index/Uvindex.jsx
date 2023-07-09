import React from 'react';

const Uvindex = () => {
    const CardsInfoLinks = [
        {
          width: "100%",
           title :"0-2",
        },
        {
            width: "100%",
            title :"2-4",
        },
        {
            width: "50%",
            title :"4-6",
        },
        {
            width: "0%",
            title :"6-8",
        },
        {
            width: "0%",
            title :"10+",
        },
      ]
    return <div>
        <div className='d-flex justify-content-center header'>
            <h4>5</h4>
            <p className='para'> medium</p>
        </div>
         <div className='d-flex '>
          {CardsInfoLinks.map((items) => (<>
        <div style={{height:" 100%", width: "100%"}}>
	<div className="col1 mx-1">
		<p className='paras'>{items.title}</p>
		<div className="meter" style={{width :"29px"}}>
			<span style= {{width :items.width}}></span>
		</div>
	</div> 
   </div></>  ))}
   </div>
    </div>;
}


export default Uvindex;