import '../static/css/Bio.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Image } from 'react-bootstrap';
import colgateLogo from '../static/img/colgate-logo-1.png'
import ucsdLogo from '../static/img/ucsd-logo.png'

const styles = {
    imageBlock: {
        height: '100px',
    },
    cardImage: {
        display: 'block',
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    cardText: {
        alignItems: 'center',
        display: 'block',
    },
    blurb: {
        paddingTop: '30px',
    }
}

class Blurb extends React.Component {
    render() {
        return (
            <div style={styles.blurb}>
                <h3>About Me</h3>
                <p>I am a PhD student at UC San Diego. </p>
            </div>
        );
    }
}

class Education extends React.Component {
    render() {
        return (
            <div className='Bio'>
                <h3>Education</h3>
                <Card className="shadow p-3 mt-3">
                    <Row>
                        <Col xs={2} style={styles.imageBlock}>
                            <Image src={ucsdLogo} style={styles.cardImage}/>
                        </Col>
                        <Col xs={10}>
                            <div style={styles.cardText}>
                                <p>PhD in Bioinformatics & Systems Biology</p>
                                <p>Advisor: <a href="https://knightlab.ucsd.edu">Rob Knight</a></p>
                                <p>University of California, San Diego, CA</p>
                                <p>2018 - Present </p>
                            </div>
                        </Col>
                    </Row>
                </Card>
                <Card className="shadow p-3 mt-3">
                    <Row>
                        <Col xs={2} style={styles.imageBlock}>
                            <Image src={colgateLogo} style={styles.cardImage}/>
                        </Col>
                        <Col xs={10}>
                            <div style={styles.cardText}>
                                <p>BA in Mathematics</p>
                                <p>Colgate University, Hamilton, NY</p>
                                <p>2014 - 2018 </p>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        );

    }
}

export default class Bio extends React.Component {
    render() {
        return (
            <div>
                <Blurb />
                <Education />
            </div>
        );
    }
}
