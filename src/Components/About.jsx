import React, { useState } from 'react';
import '../styles/About.css'
import Image3 from "../Image/images3.png"


function About() {
    const [activeTab, setActiveTab] = useState('skills');
    const tabContents = {
        skills: [
            <ul className='skills'>
                <li><img src='https://skillicons.dev/icons?i=html'title='HTML' alt='html'/></li>
                <li><img src='https://skillicons.dev/icons?i=css'title='CSS' alt='css'/></li>
                <li><img src='https://skillicons.dev/icons?i=js'title='JavaScript' alt='js'/></li>
                <li><img src='https://skillicons.dev/icons?i=react'title='React' alt='react'/></li>
                <li><img src='https://skillicons.dev/icons?i=python'title='Python' alt='python'/></li>
                <li><img src='https://skillicons.dev/icons?i=bootstrap'title='Bootstrap' alt='bootstrap'/></li>
                <li><img src='https://skillicons.dev/icons?i=mysql'title='MYSQL' alt='mysql'/></li>
                <li><img src='https://skillicons.dev/icons?i=scss'title='SCSS' alt='scss'/></li>
                <li><img src='https://skillicons.dev/icons?i=aws'title='AWS' alt='aws'/></li>
                <li><img src='https://skillicons.dev/icons?i=github'title='Github' alt='github'/></li>
                <li><img src='https://academyartifacts.s3.amazonaws.com/Images/Prod/Public_Generic_Current.png'className='custom-skill' title='PEGA' alt='PEGA'/></li>

            </ul>
        ],
        experience: [
            <ul>
                <li className='skill_li'><span>2022 - Current</span><br /><br />Programmer Analyst at Cognizant India Pvt.ltd</li>
                <li className='skill_li'><span>Project</span><br /><span>ING Netherland<br/></span><br />The application enables the Bank's strategy to transform customer service experience to drive higher 
 customer satisfaction & efficiency across operation. The scope of this project is to provide new Loan and 
 modify existing Loan. The proposed system will target the following business objectives – 
 <li className='skill_li'>1. Reduce errors in case handling. </li> 
 <li className='skill_li'>2. Decrease time for case handling.</li></li>
                {/* <li className='skill_li'><span>Responsibilities:</span><br /><br />Proficient in designing and developing Single Page Application using React, React-Router
React-Redux.<br /><br />Develop and maintain small to medium sized features for our applications using Java technology<br /><br />Contributed and enhanced the user-friendly interfaces for Lian processes within banking
applications.<br /><br />Integrated frontend interfaces with backend APIs and RESTful API, ensuring seamless data flow
and functionality and understanding of OAuth.<br /><br />Experience in using SASS, BOOTSTRAP to enhance the user experience.<br /><br />Modified existing product software to debug and troubleshoot coding errors and write unit tests
and participate in coding reviews.<br /><br />Proficient in Agile and Scrum methodology, consistently delivering end-to-end technical
solutions to solve customer problems and provide security.<br /><br /> Used Git for Version Control System and for code management.<br /><br />
</li> */}
            </ul>
        ],
        education: [
            <ul>
                <li className='skill_li'><span>2021-2023</span><br /><br />Master Of Computer Science(M.C.S) from Christ College Pune<br /><br />g.p.a:: 8.9</li>
                <li className='skill_li'><span>2018-2021</span><br /><br />Bachelor Of Computer Science(B.C.S) from Christ College Pune<br /><br />Percentage: 83.21%</li>
            </ul>
        ]
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id="about">
            <div className="containers">
                <div className="row">
                    <div className="about-col-1">
                        <img src={Image3} alt="mee" className="__main-img"/>
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">ABOUT ME</h1>
                        <p>
                        I am a dedicated and passionate engineer with a proven track record of delivering exceptional service to clients in the Netherlands and Belgium. My expertise spans across multiple cutting-edge technologies, including PEGA, Java, React.js, and MySQL, enabling me to craft efficient and innovative solutions tailored to meet diverse client needs.
                        </p>
                        <div className="tab-titles">
                            <p
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('skills')}
                            >
                                <b>Skills</b>
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('experience')}
                            >
                               <b>Experience</b> 
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('education')}
                            >
                               <b> Education</b> 
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`}>
                            {tabContents.skills}
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`}>
                            {tabContents.experience}
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}>
                            {tabContents.education}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;