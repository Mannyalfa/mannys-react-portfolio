import React from "react";
import { FaGithub, } from 'react-icons/fa';

function Project({ title, image, deployedLink, repo }) {
    return (
        <wrapper>
            <row>
                <div
                    style={{
                        width: "350px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <h3>
                        <a href={repo} target="_blank" rel="noreferrer">
                            {title}
                        </a>
                        <a href={repo} className="icon"><FaGithub size={25
                        } /></a>
                    </h3>
                    <a href={deployedLink}>
                        <img
                            style={{ maxWidth: "300px", maxHeight: "600px" }}
                            src={require(`../../assets/${image}`).default}
                            alt="budget" id="projects">
                        </img>
                    </a>

                </div>
            </row>
        </wrapper>
    );
}

export default Project;