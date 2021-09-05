import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <ul className="icons" style={{ display: "flex", justifyContent: "center", background: "transparent" }}>
                <li>
                    <a
                        href="https://www.linkedin.com/in/spud31/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin size= {40} />
                    </a>
                </li>
                <li style={{ marginLeft: "15px" }}>
                    <a
                        href="https://github.com/Mannyalfa"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub size= {40}/>
                    </a>
                </li>
                <li style={{ marginLeft: "15px" }}>
                    <a
                        href="mailto:mannyalfa@gmail.com"
                    >
                        <FaEnvelope size= {40}/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;