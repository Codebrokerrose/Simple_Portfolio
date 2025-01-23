import React, { useState } from "react";
import './styles/Header.css'; 
import './styles/addition.css';
import { Close } from "@mui/icons-material";

const Header = ({ homeRef, aboutRef, contactRef }) => {
    const [active, setActive] = useState(false); // Track menu visibility

    // Function to toggle the menu
    const showMenu = () => {
        setActive(!active);
    };

    // Function to scroll to the section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(false); // Close the menu when a link is clicked
    };

    return (
        <div className="header">
            <nav className={active ? "navbar active" : "navbar"}>
                <div className="closed">
                    <Close className="close" onClick={showMenu} />
                </div>
                <ul>
                    <li>
                        <button onClick={() => scrollToSection(homeRef)}><b>Home</b></button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(aboutRef)}><b>About</b></button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(contactRef)}><b>Education</b></button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(contactRef)}><b>Contact</b></button>
                    </li>
                </ul>
            </nav>
            <div className="changer">
                <div className="menu" onClick={showMenu}>☰</div> {/* Add a menu icon for opening */}
            </div>
        </div>
    );
};

export default Header;
