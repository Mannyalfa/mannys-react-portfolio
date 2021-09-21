import React from "react";
import { FaGithub, } from 'react-icons/fa';

function Project({ title, descr, image, deployedLink, repo }) {
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
                    <h4>
                        <a id="title" href={repo} target="_blank" rel="noreferrer">
                            {title}
                        </a>
                        <a href={repo} className="icon"><FaGithub size={25
                        } /></a>
                    </h4>
                    <a id= "descr" href={deployedLink} target="_blank" rel="noreferrer">
                            {descr}
                        <img
                            style={{ maxWidth: "350px", maxHeight: "250px" }}
                            src={require(`../../assets/${image}`).default}
                            alt="project image" id="projects">
                        </img>
                    </a>

                </div>
            </row>
        </wrapper>
    );
}

export default Project;