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
            <div>
                <strong>IMAGE-BASED FRAUDULENT CURRENCY DETECTION</strong>
                <p>Developed a machine learning-driven solution to combat counterfeit currency proliferation.</p>
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
    },
    onlineProfiles: {
        title: "ONLINE PROFILES",
        content: (
            <ul>
                <li>LinkedIn: <a href="https://linkedin.com/in/maniar-roshan7">linkedin.com/in/maniar-roshan7</a></li>
                <li>GitHub: <a href="https://github.com/ManiarRoshan">github.com/ManiarRoshan</a></li>
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
                    <h2>Full Stack Developer / UI Designer</h2>
                    <p>Aspiring developer skilled in Python, Angular, and web development frameworks.</p>
                    <div className="social-icons">
                        <a href="mailto:maniarroshan7@gmail.com">✉️</a>
                        <a href="https://github.com/ManiarRoshan">🐱</a>
                        <a href="https://linkedin.com/in/maniar-roshan7">🔗</a>
                    </div>
                    <button className="contact-button" onClick={handleViewWork}>View My Work</button>
                </div>
            </header>

            {showNavBar && (
                <nav className="nav-bar">
                    <ul>
                        {Object.keys(sections).map((key) => (
                            key !== 'declaration' && (
                                <li key={key}>
                                    <button onClick={() => handleNavigation(key)}>{sections[key].title}</button>
                                </li>
                            )
                        ))}
                    </ul>
                </nav>
            )}

            <section className="details-section">
                <h2>{sections[activeSection].title}</h2>
                <p>{sections[activeSection].content}</p>
            </section>

            <footer className="footer">
                <h3>DECLARATION</h3>
                <p>I affirm that the information provided above is accurate and complete to the best of my knowledge.</p>
            </footer>
        </div>
    );
}

export default App;