import React from 'react';
import techIcons1 from '../../assets/icons/tech/dev_node_icon_160853.png';
import techIcons2 from '../../assets/icons/tech/react_logo_icon_144942.png';
import techIcons3 from '../../assets/icons/tech/firebase_logo_icon_145278.png';
import techIcons4 from '../../assets/icons/tech/github-logo_icon-icons.com_73546.png';
import techIcons5 from '../../assets/icons/tech/m.png';
import techIcons6 from '../../assets/icons/tech/bootstrap_icon_185303.png';
import techIcons7 from '../../assets/icons/tech/prog-js01_icon-icons.com_50789.png';
import techIcons8 from '../../assets/icons/tech/prog-php02_icon-icons.com_50776.png';
import techIcons9 from '../../assets/icons/tech/css3-01_icon-icons.com_50918.png';
import techIcons10 from '../../assets/icons/tech/dev_html_icon_160856 (1).png';
import techIcons11 from '../../assets/icons/tech/dbs-mysql_icon-icons.com_50909.png';
import techIcons12 from '../../assets/icons/tech/dbs-mongodb_icon-icons.com_50910.png';
import './TechSide.css';

const TechSide = () => {
    return (
       <>
        <section className="tech_section section">
        <h1 className="h6-decorate">Tech and Tools</h1>
        <img className="tech-icons" src={techIcons1} alt="" />
        <img className="tech-icons" src={techIcons2} alt="" />
        <img className="tech-icons" src={techIcons3} alt="" />
        <img className="tech-icons" src={techIcons4} alt="" />
        <img className="tech-icons" src={techIcons5} alt="" />
        <img className="tech-icons" src={techIcons6} alt="" /><br/>
        <img className="tech-icons" src={techIcons7} alt="" />
        <img className="tech-icons" src={techIcons8} alt="" />
        <img className="tech-icons" src={techIcons9} alt="" />
        <img className="tech-icons" src={techIcons10} alt="" />
        <img className="tech-icons" src={techIcons11} alt="" />
        <img className="tech-icons" src={techIcons12} alt="" />
    
    </section>
       
       </>
    );
};

export default TechSide;