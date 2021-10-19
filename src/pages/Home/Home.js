import React from 'react';
import Hero from '../../components/Hero/Hero';
import HowDoWork from '../../components/HowDoWork/HowDoWork';
import Works from '../../components/Works/Works';
import WorkingArea from '../../components/WorkingArea/WorkingArea';
import TechSide from '../../components/TechSide/TechSide';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import Footer from '../../components/Footer/Footer';
import AboutMe from '../../components/AboutMe/AboutMe';

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