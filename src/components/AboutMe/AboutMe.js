import React, { useEffect } from 'react';
import './AboutMe.css';
import arifjawad from '../../assets/imgs/IMG_20190803_023222_324.jpg';





const AboutMe = () => {
 
 
    return (
        <>
            <section className="aboutMe section">
                <div className="grid-container grid-template1">
               <div className="text-box hovering">
               <h2 className="h2-am typometry">Hello.</h2>
              
                <p className="p-am migasikeTypo">I'm a frontend web developer working as a freelancer on Fiverr. 
                    I dream to be a full-stack developer. So, based on my practice with MongoDB, express, react and node technologies, I have built several web applications. I love to work on the front-end development side with react once I get the final design.
                    New technologies and creative designs always attracts me. I also practice designing web prototypes to gain more knowledge on web tech and UI experiences. <br />
                    My interest? I love to play guitars. I try chorus part of popular songs. And I realise, playing guitar is more like coding.
                    While working, I try to listen turkish songs because I cannot understand anything but that keeps me on my work track. </p>
                  
                    <img className="myImg" src={arifjawad} alt="" />
           
                    <div className="sign">
                       <p className="migasikeTypo"> -arif jawad</p>
                        {/* <img src={signSvg} alt=""/> */}
                                   
                </div>
                </div>                 
                </div>
            </section>
     
        
        </>
    );
};

export default AboutMe;