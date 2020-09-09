import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from 'react-bootstrap';
import myPhoto from '../static/img/me-photo.jpg';
import iconData from '../data/Icons';

import '../static/css/Sidebar.css';

const styles = {
    headBubble: {
        display: 'block',
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    bubbleBlock: {
        padding: '10px',
        paddingTop: '30px',
        height: '250px',
    },
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <section id="sidebar">
                <section id="head-bubble" style={styles.bubbleBlock}>
                    <Image src={myPhoto} style={styles.headBubble} roundedCircle/>
                </section>
                <section id="intro" className="intro">
                    <header>
                        <h4>George Armstrong</h4>
                    </header>
                </section>
                <section id="footer" className="icons">
                    {iconData.map((icon, index) => (
                       <a href={icon.link} key={index}>
                           <FontAwesomeIcon icon={icon.icon} size={'lg'} />
                       </a>
                    ))}
                </section>
            </section>
        );
    }
}