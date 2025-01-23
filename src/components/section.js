import React, { useEffect } from "react";
import './styles/section.css';
import './styles/addition.css';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Section = () => {
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000
        }); // Initialize AOS when the component mounts
    }, []); // Empty dependency array to ensure it runs only once

    return (
        <div className="section">
            <div className="section__container" data-aos="fade-in">
                {/* Profile Image */}
                <div className="section__img">
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQFRpnra-jcP8w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728985203018?e=1741219200&v=beta&t=aiebYqPCjTGdtizpkzKfMl2klnSEbLqfX9FiCGtmq9Y" alt="section" />
                </div>

                {/* Skills Section */}
                <div className="section__content">
                    <h1>Ankana Saha</h1>
                    <div className="section__skills">
                        <div className="skill">Experience in Frontend and Backend Development</div>
                        <div className="skill">REACT</div>
                        <div className="skill">PHP</div>
                        <div className="skill">MYSQL</div>
                        <div className="skill">HTML, CSS, JAVA_SCRIPT</div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="section__projects">
                <h2>Projects</h2>
                <ul className="projects__list">
                    <li className="project" data-aos="fade-up">
                        <h3>ATechnologies</h3>
                        <p>Developed a management website for the well-reputed company ATechnologies using PHP, CSS, HTML, and JavaScript. The platform streamlines operations and enhances user experience.</p>
                        <a href="https://atechkol.in/" target="_blank" rel="noopener noreferrer">Visit ATechnologies</a>
                    </li>
                    <li className="project" data-aos="fade-up">
                        <h3>E-Commerce Platform</h3>
                        <p>Created an Amazon-inspired e-commerce platform clone. The project demonstrates advanced web development skills and a seamless user interface.</p>
                        <a href="https://classy-phoenix-02834d.netlify.app/" target="_blank" rel="noopener noreferrer">Explore the E-Commerce Platform</a>
                    </li>
                    <li className="project" data-aos="fade-up">
                        <h3>Learning Management System (LMS)</h3>
                        <p>Collaborated with a team to develop a comprehensive Learning Management System for Vivekananda College students. Gained hands-on experience and received certification for the project.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Section;
