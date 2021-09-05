import React from "react";
import { FaGithub, } from 'react-icons/fa';

function Project({ title, image, deployedLink, repo }) {
    return (
        <row>
        }
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
                    <a href={repo} className="icon"><FaGithub size= {20} /></a>
                </a>
            </h3>
            <a href={deployedLink}>
            <img
                style={{ maxWidth: "300px", maxHeight: "600px" }}
                src={require(`../../assets/${image}`).default}
                alt="budget">
            </img>
            </a>

        </div>
        </row>
    );
}

export default Project;