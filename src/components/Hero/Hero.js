import React from 'react';
import './Hero.css';
import circleSvg from '../../assets/svgs/circle.svg';
const Hero = () => {
    return (
        // hero-section
    <>
     <section className="section">
            <div className="hero grid-container grid-template1">
                <div className="hero-item-one">
                    <div className="intro">
                        <h1 className="intro-header">I'm Arif.</h1>
                        <p className="intro-text">full-stack developer <span className="glitch" data-text="& designer"> </span>
                        </p>
                        <p className="intro-invisible"><span>I'm arif </span></p>
                    </div>
    
                <div id="circle">                  
                    <img src={circleSvg} alt="svg" />
                        <a href="https://www.fiverr.com/arifjawad241">FiverR</a>
                        <br></br>
                        <p>From Bangladesh</p>
                    </div>
               </div>    
            </div>
       </section>
       </>
    //    hero-section ends
    );
};

export default Hero;