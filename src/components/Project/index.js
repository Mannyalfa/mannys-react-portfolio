import React from "react";
import { FaGithub, } from 'react-icons/fa';

function Project({ title, image, deployedLink, repo }) {
    return (
        <div
            style={{
                width: "350px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h3>
                <a href={deployedLink}>
                    {title}
                    <a href={repo} className="icon"><FaGithub size= {30} /></a>
                </a>
            </h3>
            <img
                style={{ maxWidth: "300px", maxHeight: "600px" }}
                src={require(`../../assets/${image}`).default}
                alt="budget">
            </img>

        </div>
    );
}

export default Project;