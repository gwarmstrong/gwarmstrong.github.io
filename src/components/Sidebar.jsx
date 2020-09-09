import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconData from '../data/Icons';

import '../static/css/Sidebar.css';

export default class Sidebar extends React.Component {
    render() {
        return (
            <section id="sidebar">
                <section id="intro" className="intro">
                    <header>
                        <h4>George Armstrong</h4>
                    </header>
                </section>
                <secion id="footer">
                    <ul className="icons">
                        {iconData.map((icon) => (
                           <li>
                               <a href={icon.link}>
                                   <FontAwesomeIcon icon={icon.icon} />
                               </a>
                           </li>
                        ))}
                    </ul>
                </secion>
            </section>
        );
    }
}