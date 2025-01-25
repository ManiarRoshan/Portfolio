import React, { useState } from 'react';
import './App.css';

const sections = {
    summary: {
        title: "SUMMARY",
        content: "Aspiring Full Stack Developer skilled in Python, Angular, and web development frameworks. Experienced in creating scalable applications and working on AI-based projects."
    },
    education: {
        title: "EDUCATION",
        content: "GATES Institute of Technology, Gooty - Bachelor of Technology in Computer Science (Artificial Intelligence) (2020–2024) - CGPA: 7.7/10.0"
    },
    technicalSkills: {
        title: "TECHNICAL SKILLS",
        content: (
            <ul>
                <li>Programming Languages: Python, JavaScript, HTML</li>
                <li>Databases: MySQL</li>
                <li>Frameworks: Angular, AngularJS, Bootstrap, ReactJS</li>
                <li>Familiar with: Git and GitHub</li>
            </ul>
        )
    },
    softSkills: {
        title: "SOFT SKILLS",
        content: (
            <ul>
                <li>Quick Learner</li>
                <li>Adaptability and Flexibility</li>
                <li>Continuous Learning</li>
                <li>Languages: English, Hindi, Telugu</li>
            </ul>
        )
    },
    projects: {
        title: "PROJECTS",
        content: (
            <div className="project-container">
                <div className="project-item">
                    <h3>IMAGE-BASED FRAUDULENT CURRENCY DETECTION</h3>
                    
                    <div className="project-section">
                        <h4>Abstract</h4>
                        <p>Developed a machine learning-driven solution to combat counterfeit currency proliferation, addressing
                        economic implications. Utilized OpenCV, TensorFlow, and MATLAB for robust image processing
                        implementation.</p>
                    </div>

                    <div className="project-section">
                        <h4>Key Responsibilities</h4>
                        <ul>
                            <li>Contributed to developing a counterfeit currency detection system</li>
                            <li>Assisted in testing and optimization processes</li>
                            <li>Collaborated with team members to enhance edge detection methods</li>
                            <li>Documented project progress and findings for review</li>
                            <li>Demonstrated eagerness to learn and adapt</li>
                        </ul>
                    </div>

                    <div className="project-section">
                        <h4>Technologies Used</h4>
                        <div className="tech-stack">
                            <span className="tech-tag">OpenCV</span>
                            <span className="tech-tag">TensorFlow</span>
                            <span className="tech-tag">MATLAB</span>
                            <span className="tech-tag">Machine Learning</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    certificates: {
        title: "CERTIFICATES",
        content: (
            <ul>
                <li>Full Stack Development in Python</li>
                <li>Internship on Machine Learning with Python</li>
                <li>AWS AI-ML Virtual Internship</li>
            </ul>
        )
    },
    awards: {
        title: "AWARDS",
        content: (
            <ul>
                <li>Honor Award for Academic Excellence, GATES Institute of Technology</li>
                <li>Gold Medalist in Volleyball, College Championship Winner</li>
            </ul>
        )
    }
};

function App() {
    const [activeSection, setActiveSection] = useState('summary');
    const [showNavBar, setShowNavBar] = useState(false);

    const handleViewWork = () => {
        setShowNavBar(true);
        setActiveSection('summary');
    };

    const handleNavigation = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="app">
            <header className="hero">
                <div className="hero-content">
                    <h1>Hi, I am Maniar Roshan</h1>
                    <h2>Python Full Stack Developer</h2>
                    <p>Aspiring developer skilled in Python, Angular, and web development frameworks.</p>
                    <button className="contact-button" onClick={handleViewWork}>View My Work</button>
                </div>
            </header>

            {showNavBar && (
                <nav className="nav-bar">
                    <ul>
                        {Object.keys(sections).map((key) => (
                            <li key={key}>
                                <button onClick={() => handleNavigation(key)}>{sections[key].title}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            <section className="details-section">
                <h2>{sections[activeSection].title}</h2>
                <div className="section-content">{sections[activeSection].content}</div>
            </section>

            <footer className="footer">
                <h3>Connect with Me</h3>
                <div className="social-links">
                    <a href="https://github.com/ManiarRoshan" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                    </a>
                    <a href="https://linkedin.com/in/maniar-roshan7" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default App;