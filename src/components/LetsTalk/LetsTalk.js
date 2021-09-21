import React, { useEffect } from 'react';
import './LetsTalk.css';


const LetsTalk = () => {

 
    return (
        <>
          <section className="letsTalk section">
          <h2 className="lt-title">I Create..</h2> 
            <div className="wrapper grid-container grid-template1">
     
       <div className="text-row" >
	        <div className="text-row--inner" >
			     <div className="row scrolling" >
           
               <span>Landing page</span>
               <span>UI Design</span>
       		</div>
			</div>
            <div className="text-row--inner" >
			     <div className="row2 scrolling" >
                 <span>Websites</span>
               <span>E-commerce</span>
             
       		</div>
			</div>
	     
         </div>
       </div>

  
        <div className="grid-container grid-justify grid-template1">
            <h2 className="lt-title">Lets bring your ideas to life</h2>
        </div>
       
<div className="contact-info">
   <ul>
       <li className="list__link"> <a href="mailto:arifjawad.ajp@gmail.com" data-title="arifjawad.ajp@gmail.com" target="_blank">
           <span className="link__text" >arifjawad.ajp@gmail.com</span>
           </a></li>
       <li> <a href="https://www.linkedin.com/in/arifjawad/" target="_blank">
           <span >linkedin/arifjawad_</span>
           </a></li>
      
   </ul>
   </div>


  
</section>
        </>
    );
};

export default LetsTalk;