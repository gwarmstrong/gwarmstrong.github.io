import React from "react";
import paperData from "../data/Citations";
import Citation from "../components/Citation";

const styles = {
    publicationsList: {
        paddingTop: '30px',
    }
}

export default class Publications extends React.Component {
    render() {
        return (
            <div style={styles.publicationsList}>
                <h3>Publications</h3>
                {paperData.map((citation, index) =>
                    <Citation citation={citation} key={index}/>
                )}
            </div>
        );
    }
}
