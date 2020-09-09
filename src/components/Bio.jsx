import '../static/css/Bio.css'
import React from 'react';


class Education extends React.Component {
    render() {
        return (
            <div className='Bio'>
                <h4>Education</h4>
                <ul>
                    <li>
                        <p>PhD in Bioinformatics & Systems Biology</p>
                        <p>Advisor: <a href="https://knightlab.ucsd.edu">Rob Knight</a></p>
                        <p>University of California, San Diego, CA</p>
                        <p>2018 - Present </p>
                    </li>
                    <li>
                        <p>BA in Mathematics</p>
                        <p>Colgate University, Hamilton, NY</p>
                        <p>2014 - 2018 </p>
                    </li>
                </ul>
            </div>
        );

    }
}

export default class Bio extends React.Component {
    render() {
        return (
            <Education />
        );
    }
}
