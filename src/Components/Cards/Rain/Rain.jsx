import React from 'react';

const Rain = () => {
  
    return <div>
           <div className='d-flex justify-content-center header'>
            <h4>75%</h4>
           
        </div>
    
       
          <div style={{height:" 100%", width: "100%"}}>
	        <div className="col1 d-flex justify-content-start ">
                
                <p className='paras mx-1'>0%</p>
                <p className='paras mx-2'>25%</p>
                <p className='paras mx-2'>50%</p>
                <p className='paras mx-2'>75%</p>
                <p className='paras mx-2'>100%</p>
	         </div> 
             </div> 
   
     <div className="meter" style={{width :"180px"}}>
			<span style= {{width :"80%"}}></span>
		</div>
       
   
    </div>;
}


export default Rain;