import React from 'react';
import Hero from '../Hero/Hero';
import HowDoWork from '../HowDoWork/HowDoWork';
import Works from '../Works/Works';
import WorkingArea from '../WorkingArea/WorkingArea';
import TechSide from '../TechSide/TechSide';
import LetsTalk from '../LetsTalk/LetsTalk';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
           <Hero></Hero> 
           <HowDoWork></HowDoWork> 
           <Works></Works>
           <WorkingArea></WorkingArea>
           <TechSide></TechSide>
           <LetsTalk></LetsTalk>
           <Footer></Footer>
        </>
    );
};

export default Home;