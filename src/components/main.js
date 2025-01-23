import React, { useState, useEffect } from "react";
import './styles/main.css';
import './styles/addition.css';
import { Facebook, Instagram, LinkedIn, GitHub } from "@mui/icons-material";


const Main = () => {
    const [text, setText] = useState(""); // State to hold the dynamic text
    const [careerIndex, setCareerIndex] = useState(0); // State for the current career index
    const [characterIndex, setCharacterIndex] = useState(0); // State for the current character index

    const careers = ["Coder", "Web Developer", "Intern"]; // Careers array

    useEffect(() => {
        const updateText = () => {
            if (characterIndex < careers[careerIndex].length) {
                setText(prev => prev + careers[careerIndex][characterIndex]); // Add one character at a time
                setCharacterIndex(prev => prev + 1);
            } else {
                setTimeout(() => {
                    setCareerIndex((careerIndex + 1) % careers.length); // Move to the next career
                    setCharacterIndex(0);
                    setText(""); // Reset text
                }, 1000); // Pause before transitioning to the next word
            }
        };

        const timer = setTimeout(updateText, 100); // Adjust typing speed here
        return () => clearTimeout(timer); // Clean up timer
    }, [characterIndex, careerIndex, careers]);

    return (
        <div className="main">
            <div className="main__container">
                <div className="text">
                    <h2>Hello Everyone!</h2>
                    <h1>I am Ankana Saha</h1>
                    <h2 className="container">I am {careers[careerIndex][0] === "I" ? "an" : "a"} {text}</h2>
                    <div className="icons">
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <Instagram className="icon" />
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Facebook className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/ankana-saha-604742271/" target="_blank" rel="noopener noreferrer">
                            <LinkedIn className="icon" />
                        </a>
                        <a href="https://github.com/Codebrokerrose" target="_blank" rel="noopener noreferrer">
                            <GitHub className="icon" />
                        </a>
                    </div>

                    <div className="buttons">
                        <button>See Me</button>
                        <button>Hire Me</button>
                    </div>
                </div>
                <div className="main__img">
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQFRpnra-jcP8w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728985203018?e=1741219200&v=beta&t=aiebYqPCjTGdtizpkzKfMl2klnSEbLqfX9FiCGtmq9Y" alt="Ankana Saha" height="400px" width="400px" />
                </div>
            </div>
        </div>
    );
};

export default Main;
