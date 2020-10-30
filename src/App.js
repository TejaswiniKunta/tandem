import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React, {Component} from "react";
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core';
import Main from "./components/Main";
import {Header} from "./components/Header";


class App extends Component {

    render() {

        return (
            <div>
            <Header/>
            <Main/>
            </div>
        );
    }
}

export default App;
