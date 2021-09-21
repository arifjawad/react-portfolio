import React from 'react';
import Hero from '../Hero/Hero';
import HowDoWork from '../HowDoWork/HowDoWork';
import Works from '../Works/Works';
import WorkingArea from '../WorkingArea/WorkingArea';
import TechSide from '../TechSide/TechSide';
import LetsTalk from '../LetsTalk/LetsTalk';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    return (
        <>
           <Hero></Hero> 
           <AboutMe></AboutMe>
           <Works></Works>
           <LetsTalk></LetsTalk>
           
           {/* <HowDoWork></HowDoWork> */}
     
           {/* <WorkingArea></WorkingArea> */}
           {/* <TechSide></TechSide> */}
           {/* 
           <LetsTalk></LetsTalk> */}
           {/* <Footer></Footer> */}
        </>
    );
};

export default Home;