import React from "react";
 import { Navbar, Container, Modal, Tab } from 'react-bootstrap';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const { tabs = [], setCurrentTab, currentTab } = props;

    return (
        <Navbar>
            <Container fluid>
            <ul className="flex-row" id="header-tabs">
                <li className="mx-2"></li>
                {tabs.map((tab) => (
                    <li
                        className={`mx-1 ${currentTab.name === tab.name && "navActive"}`}
                        key={tab.name}
                    >
                        <span
                            onClick={() => {
                                setCurrentTab(tab);
                            }}
                        >
                            {capitalizeFirstLetter(tab.name)}
                        </span>
                    </li>
                ))}
            </ul>
            </Container>
        </Navbar>
    );
}

export default Nav;


