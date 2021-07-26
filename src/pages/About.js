import React from 'react';

const About = () => {
    return(
        <div className="container profile">
            <div className="image">
                <img src="assets/OI000188.JPG" alt="profile-pict" />
            </div>
            <div className="about">
                <div className="nama">
                    Gamalliel Sharon
                </div>
                <div className="tentang">
                    <div className="row">
                        <div className="col">
                            <p>
                            Final year student at Institut Teknologi PLN Jakarta studying informatics engineering. I am passionate about designing and building products that are useful to many people. I bring an engineering perspective and creative problem-solving approach to create products and experiences people love to use. Persistence, curiosity, and obsessive attention to detail define me.
                            </p>
                        </div>
                        <div className="col">
                            <p>
                            With a background in Informatics engineering and experience as a developer, I am competent in all aspects of the design process.
                I also like to design some of my imagination apps and implement them into a real app for best practice, prioritizing user experience by making good and friendly user interfaces.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="skill-set">
                    <div className="row">
                        <div className="col">
                            <div className="skill-title">
                                Certificate
                            </div>
                            <ul>
                                <li>Coursera - Google IT Automation with Python Specialization</li>
                                <li>Certiport - Microsoft Technology Associate (Database Administration Fundamental)</li>
                                <li>Dicoding Indonesia - Belajar Dasar Pemrograman Web</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="skill-title">
                                Skills
                            </div>
                            <ul>
                                <li>UX Design</li>
                                <li>UI Design</li>
                                <li>Wireframes & Mockups</li>
                                <li>HTML, CSS, JavaScript</li>
                                <li>React JS</li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="skill-title">
                                Tools
                            </div>
                            <ul>
                                <li>Figma</li>
                                <li>Whimsical</li>
                                <li>Visual Studio Code</li>
                                <li>Trello</li>
                                <li>Git & GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;