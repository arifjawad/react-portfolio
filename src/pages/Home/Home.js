import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import HowDoWork from '../../components/HowDoWork/HowDoWork';
import Works from '../../components/Works/Works';
import WorkingArea from '../../components/WorkingArea/WorkingArea';
import TechSide from '../../components/TechSide/TechSide';
import LetsTalk from '../../components/LetsTalk/LetsTalk';
import Footer from '../../components/Footer/Footer';
import AboutMe from '../../components/AboutMe/AboutMe';
import PageProgress from 'react-page-progress';
import { PongSpinner } from "react-spinners-kit";

const Home = (props) => {

    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
        let timer = setTimeout(() => setLoaded(true), 2000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <>{!isLoaded ? (
            <div style={{ marginLeft: "48%", marginTop: "20%" }}>
                <PongSpinner
                    size={50}
                    color="#686769"
                    loading={true}
                />
            </div>

        ) : (

            <>
                <PageProgress color={'white'} height={2}></PageProgress>

                <Hero></Hero>
                <AboutMe></AboutMe>
                <Works></Works>
                <LetsTalk></LetsTalk>
            </>

        )}
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