import "./App.css";
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainContent from "./main_content/MainContent";
import LocalStorageDataAccess from "./data_access/LocalStorageListDataAccess";
import NewTaskDialog from "./new_task_dialog/NewTaskDialog";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAccess: new LocalStorageDataAccess(),
            showNewTaskDialog: false
        };
    }

    render() {
        return (
            <div className="App">
                <Header dataAccess={this.state.dataAccess} />
                <MainContent dataAccess={this.state.dataAccess} />
                <Footer
                    dataAccess={this.state.dataAccess}
                    onAddTaskClicked={() => this.setState({
                        dataAccess: this.state.dataAccess,
                        showNewTaskDialog: true
                    })} />
                {this.state.showNewTaskDialog ? <div className="app_background"></div> : null}
                {this.state.showNewTaskDialog ?
                    <NewTaskDialog
                        onNewTaskSubmitted={taskText => {
                            this.state.dataAccess.getTasksList().push({
                                title: taskText,
                                isChecked: false
                            });
                            this.state.dataAccess.setTasksList(this.state.dataAccess.getTasksList());
                            this.setState({
                                dataAccess: this.state.dataAccess,
                                showNewTaskDialog: false
                            });
                        }}
                        onNewTaskCancelled={() => this.setState({
                            dataAccess: this.state.dataAccess,
                            showNewTaskDialog: false
                        })} />
                    : null}
            </div>
        );
    }
}

export default App;
