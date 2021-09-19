import React ,{useEffect}from 'react';
import './Hero.css';
import circleSvg from '../../assets/svgs/circle.svg';
import  elipseSvg1 from '../../assets/svgs/Ellipse1.svg';
import  elipseSvg2 from '../../assets/svgs/elipse2.svg';



const Hero = () => {

    useEffect(() => {
         
        let didScroll = false;
    
        let paralaxTitles = document.querySelectorAll('.text-row');
        let paralaxTitlesT2 = document.querySelectorAll('.paralax-title-t2');   
        const scrollInProgress = () => {
            didScroll = true
        }
    
        const raf = () => {
        if(didScroll) {
            paralaxTitles.forEach((element, index) => {
                element.style.transform = "translateX("+ window.scrollY / 1.5 + "px)"
            })
            paralaxTitlesT2.forEach((element, index) => {
                element.style.transform = "translateX(-"+ window.scrollY / 2.8 + "px)"
            })
            didScroll = false;
        }
        requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        window.addEventListener('scroll', scrollInProgress);
        });

    return (
        // hero-section
    <>
     <section className="section">
            <div className="hero grid-container grid-template1">
                <div className="hero-item-one">
                    <div className="intro">
                        <h1 className="intro-h1 lemajorTypo">Arif.</h1>
                        <p className="intro-text">full-stack developer  
                        </p>
                        {/* <span className="glitch" data-text="& designer"> </span> */}
                       <p className="intro-bottom ">I help companies, brands and entrepreneurs world-wide bringing their web appearance to life. I develop modern web products and design real life experience.</p>                  
                    </div>
                   <div id='circle'>
                   <p className="lemajorTypo">From Bangladesh</p>
                       </div>
                         {/* <div id="circle">                  
                        <img src={circleSvg} alt="svg" />
                        <a href="https://www.fiverr.com/arifjawad241" className='lemajorTypo'>FiverR</a>
                        <br></br>
                       
                    
                      
                    </div> */}
               </div>    
            </div>
       </section>

       <section className="scroll-rap">
       <div className="text-row" >
	        <div className="text-row--inner" >
			     <div className="row" >
                 <span>Websites</span>
               <span>E-commerce</span>
               <span>Landing page</span>
               <span>UI Design</span>
               <span>Dashboards</span>
               <span>Admin-panel</span>
       		</div>
			</div>
	        <div className="text-row--inner reverse">
			    </div>
         </div>
       </section>
       </>
    //    hero-section ends
    );
};

export default Hero;