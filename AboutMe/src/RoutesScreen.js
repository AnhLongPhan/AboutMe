import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from "./web/login/Login";
import Home from "./web/Home";

class RoutesScreen extends Component {
    render() {
        let { history } = this.props;
        return (
            <Router history={history}>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </Router>
        )
    }
}

export default RoutesScreen;