import React from "react";

function About() {
    return (
        <wrapper>
            <row className="my-5" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <img
                    src={require(`../../assets/formal-profile.png`).default}
                    alt="Manny Alfaro"
                    id="about-photo"
                />
                <p id="narrative" style={{ marginLeft: "60px" }}>
                    As a creative and innovative web developer focused on customer satisfaction, I manage all aspects from concept to requirements definition, design, and development to launch, maintenance and user support. I enjoy the client-facing role and working closely with team members to produce high-quality deliverables.
                    <br></br>
                    <br></br>
                    Do you want to share your vision worldwide and grow your business? I'll use cutting-edge technology and leverage it to your advantage. Let's build your dream and bring your ideas to life!
                </p>
            </row>
            <row className="my-5" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <img src={"https://fontmeme.com/permalink/210905/707ab8d0461083ab97a1afd31eece860.png"}
                    alt="cloud-background"
                />
            </row>
        </wrapper>
    );
}

export default About;