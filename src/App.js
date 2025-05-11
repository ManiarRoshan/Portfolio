import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
                <li>Frameworks: Angular, AngularJS, Bootstrap, Django, ReactJS</li>
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
                    <h3>EcoVision: Corporate Sustainability Tracker</h3>
                    
                    <div className="project-section">
                        <h4>Abstract</h4>
                        <p>Contributed to the development of a web application aimed at managing and visualizing sustainability
                        metrics for companies. Collaborated with a cross-functional team to design a user-friendly interface
                        and robust backend, ensuring efficient data handling and a seamless user experience.</p>
                    </div>

                    <div className="project-section">
                        <h4>Key Responsibilities</h4>
                        <ul>
                            <li>Created a flexible MongoDB structure for storing ESG data</li>
                            <li>Built RESTful APIs with Node.js and Express for frontend-backend communication</li>
                            <li>Developed responsive components using React.js for better user experience</li>
                            <li>Used Git for team collaboration and code management</li>
                        </ul>
                    </div>

                    <div className="project-section">
                        <h4>Technologies Used</h4>
                        <div className="tech-stack">
                            <span className="tech-tag">React.js</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">MongoDB</span>
                            <span className="tech-tag">Express</span>
                            <span className="tech-tag">Git</span>
                        </div>
                    </div>
                </div>

                <div className="project-item">
                    <h3>Task Management System (Django Web Application)</h3>
                    
                    <div className="project-section">
                        <h4>Abstract</h4>
                        <p>Developed a full-stack web application using Django framework that enables users to efficiently manage
                        and track their tasks. Implemented user authentication system and CRUD operations for task
                        management with priority levels and status tracking.</p>
                    </div>

                    <div className="project-section">
                        <h4>Key Responsibilities</h4>
                        <ul>
                            <li>Architected and developed a Task Management System using Django MVT pattern and MySQL database</li>
                            <li>Implemented user authentication system and CRUD operations for efficient task management</li>
                            <li>Developed database schema and performed migrations using Django ORM for data management</li>
                        </ul>
                    </div>

                    <div className="project-section">
                        <h4>Technologies Used</h4>
                        <div className="tech-stack">
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Django</span>
                            <span className="tech-tag">MySQL</span>
                            <span className="tech-tag">HTML/CSS</span>
                            <span className="tech-tag">Bootstrap</span>
                            <span className="tech-tag">Git</span>
                        </div>
                    </div>
                </div>

                <div className="project-item">
                    <h3>Credit Card Management System</h3>
                    
                    <div className="project-section">
                        <h4>Abstract</h4>
                        <p>Developed a full-stack web application using Angular for managing credit card data with CRUD
                        functionality and validation. Integrated JSON Server for API simulation and used Angular Material for
                        building responsive and professional UI.</p>
                    </div>

                    <div className="project-section">
                        <h4>Key Responsibilities</h4>
                        <ul>
                            <li>Built responsive web pages using Angular and Angular Material UI components</li>
                            <li>Implemented form validations and CRUD operations for credit card management</li>
                            <li>Integrated JSON Server to simulate RESTful API for data persistence</li>
                        </ul>
                    </div>

                    <div className="project-section">
                        <h4>Technologies Used</h4>
                        <div className="tech-stack">
                            <span className="tech-tag">Angular</span>
                            <span className="tech-tag">TypeScript</span>
                            <span className="tech-tag">HTML/CSS</span>
                            <span className="tech-tag">Angular Material</span>
                            <span className="tech-tag">JSON Server</span>
                            <span className="tech-tag">Git</span>
                        </div>
                    </div>
                </div>

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
    },
    contact: {
        title: "CONTACT ME",
        content: (
            <div className="contact-container">

            </div>
        )
    }
};

function App() {
    const [activeSection, setActiveSection] = useState('summary');
    const [showNavBar, setShowNavBar] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleViewWork = () => {
        setShowNavBar(true);
        setActiveSection('summary');
    };

    const handleNavigation = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section.toLowerCase());
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            // Add a small delay to ensure smooth scrolling
            setTimeout(() => {
                element.style.opacity = '1';
            }, 500);
        }
    };

    return (
        <div className="app">
            <header className="hero">
                <div className="hero-content" data-aos="fade-up">
                    <div className="hero-text">
                        <h1>Hi, I am <span className="name-highlight">Maniar Roshan</span></h1>
                        <h2>Python Full Stack Developer</h2>
                        <div className="hero-description">
                            <p>Passionate developer with expertise in Python, Angular, and modern web technologies.</p>
                            <p>Building scalable and efficient solutions for real-world problems.</p>
                        </div>
                        <div className="hero-buttons">
                            <button className="contact-button" onClick={handleViewWork}>View My Work</button>
                        </div>
                    </div>
                </div>
            </header>

            {showNavBar && (
                <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
                    <ul>
                        {Object.keys(sections).map((key) => (
                            <li key={key}>
                                <a href={`#${key.toLowerCase()}`} onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(key);
                                    const element = document.getElementById(key.toLowerCase());
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}>
                                    {sections[key].title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            <section className="details-section" id={activeSection.toLowerCase()}>
                <h2>{sections[activeSection].title}</h2>
                <div>
                    {sections[activeSection].content}
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-grid">
                        <div className="footer-section">
                            <h3>Contact Me</h3>
                            <div className="contact-info">
                                <p>Email: maniarroshan7@gmail.com</p>
                                <p>Phone: +91 8143153474</p>
                            </div>
                        </div>
                        <div className="footer-section">
                            <h3>Follow Me</h3>
                            <div className="social-links">
                                <a href="https://github.com/ManiarRoshan" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                                </a>
                                <a href="https://linkedin.com/in/maniar-roshan7" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Maniar Roshan. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;