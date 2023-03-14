import "./App.css";
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainContent from "./main_content/MainContent";
import LocalStorageDataAccess from "./data_access/LocalStorageListDataAccess";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAccess: new LocalStorageDataAccess()
        };
    }

    render() {
        return (
            <div className="App">
                <Header dataAccess={this.state.dataAccess}></Header>
                <MainContent dataAccess={this.state.dataAccess}></MainContent>
                <Footer dataAccess={this.state.dataAccess}></Footer>
            </div>
        );
    }
}

export default App;
