import React from "react";
import paperData from "../data/Citations";
import Citation from "../components/Citation";

export default class Publications extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {paperData.map(citation =>
                        <Citation citation={citation}/>
                    )}
                </ul>
            </div>
        );
    }
}
