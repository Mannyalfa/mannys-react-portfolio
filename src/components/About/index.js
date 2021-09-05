import React from "react";

function About() {
    return (
        <wrapper>
        <row className="my-5" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <img
                src={require(`../../assets/formal-profile.png`).default}
                alt="Manny's photo"
                id="about-photo"
            />
            <p style={{ marginLeft: "60px" }}>
                As a web developer focused on customer satisfaction, I manage all aspects from concept to requirements definition, design, development, launch, maintenance and user support. I enjoy the client-facing role and working closely with team members to produce high-quality deliverables.
                My philosophy is that introducing fresh perspectives and new techniques allow businesses to evolve and grow. My goal is to remain on the cutting edge of advancements and use them to contribute to your business's success. Let's build your dream and bring your ideas to life!
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