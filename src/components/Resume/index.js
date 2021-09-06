import React from "react";
import ResumeDownload from "../../assets/resume-alfaro.pdf";

function Resume({ tabs }) {
    const frontend = [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Bulma",
        "REACT"
    ];
    const backend = [
        "jQuery",
        "Node.js",
        "Express.js",
        "SQL",
        "Insomnia",
        "MongoDB",
    ];

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={require(`../../assets/resume.png`).default}
                        alt="resume"
                        style={{ width: "900px" }}
                    />
                    <br />
                    <a
                        href={ResumeDownload}
                        download="Resume"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button>Download Resume</button>
                    </a>
                </div>

                <div>
                    <h1 id= "skillset">Skillset</h1>
                    <div style={{ display: "flex" }}>
                        <div>
                            <h3>Front-End</h3>
                            <ul>
                                {frontend.map((skills) => (
                                    <li>{skills}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Back-End</h3>
                            <ul>
                                {backend.map((skills) => (
                                    <li>{skills}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Resume;