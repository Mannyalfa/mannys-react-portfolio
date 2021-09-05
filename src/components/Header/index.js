import React from "react";
import Nav from "../Nav";

function Header(props) {
    return (
        <header className="flex-row px-1" style={{ display: "flex", justifyContent: "space-around" }} id= "header-row">
            <h2>
                <a data-testid="link" href="/" style={{ background: "none", color: "#000000" }}>
                <img src={"https://fontmeme.com/permalink/210905/c70d82efdb0140fa48015c2830e137d5.png"}
                alt="Manny Alfaro"
                />
                </a>
            </h2>
            <Nav
                tabs={props.tabs}
                setCurrentTab={props.setCurrentTab}
                currentTab={props.currentTab}
            />
        </header>
    );
}

export default Header;