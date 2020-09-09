import React from 'react';

export default class Citation extends React.Component {
    render() {
        const citation = this.props.citation
        const authors = citation.authors
        const title = citation.title
        const link = citation.link
        const journal = citation.journal
        const date = citation.date
        return (
            <li>
                <b>{title}</b>
                <p>{authors}. <em>{journal}</em> ({date}) | <a href={link}>Link</a></p>
            </li>
        );
    }
}

