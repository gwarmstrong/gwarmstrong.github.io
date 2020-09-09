import React from 'react';
import Card from 'react-bootstrap/Card';

export default class Citation extends React.Component {
    render() {
        const citation = this.props.citation
        const authors = citation.authors
        const title = citation.title
        const link = citation.link
        const journal = citation.journal
        const date = citation.date
        return (
            <Card className="shadow p-3 mt-3">
                <div>
                    <b>{title}</b>
                    <p>{authors}. <em>{journal}</em> ({date}) | <a href={link}>Link</a></p>
                </div>
            </Card>
        );
    }
}

