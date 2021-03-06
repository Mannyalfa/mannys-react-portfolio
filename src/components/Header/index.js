import React from "react";
import Navigation from "../Nav";

function Header(props) {
    return (
        <header className="flex-row px-1" style={{ display: "flex", justifyContent: "space-around" }} id= "header-row">
            <h2>
                <img src={"https://fontmeme.com/permalink/210906/d2503ec9fad6b5f2526e61ee80f28d37.png"}
                alt="Manny Alfaro"
                />
            </h2>
            <Navigation
                tabs={props.tabs}
                setCurrentTab={props.setCurrentTab}
                currentTab={props.currentTab}
            />
        </header>
    );
}

export default Header;