import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from "./Landing";
import Datasets from "./Datasets";
import MyNav from "./Nav";

import '../static/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <MyNav />
                    <Switch>
                        <Route component={Landing} exact path="/" />
                        <Route component={Datasets} exact path="/datasets" />
                    </Switch>
                </div>
            </Router>
        );
    }
}
