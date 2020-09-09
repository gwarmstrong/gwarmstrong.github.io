import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import Landing from "./Landing";
import Publications from "./Publications";
import MyNav from "../components/Nav";
import Sidebar from "../components/Sidebar";

import '../static/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <MyNav />
                    <Container fluid>
                        <Row>
                            <Col sm={3}>
                                <Sidebar />
                            </Col>
                            <Col sm={8}>
                                <Switch>
                                    <Route component={Landing} exact path="/" />
                                    <Route component={Publications} exact path="/publications" />
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Router>
        );
    }
}
