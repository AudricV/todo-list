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
        const dataAccess = new LocalStorageDataAccess();
        this.state = {
            dataAccess: dataAccess,
            showNewTaskDialog: false,
            quickSearchSearchText: "",
            remainingTasksCount: dataAccess.getRemainingTasksCount(),
            tasksCount: dataAccess.getTasksCount()
        };
    }

    render() {
        return (
            <div className="App">
                <Header
                    remainingTasksCount={this.state.remainingTasksCount}
                    tasksCount={this.state.tasksCount} />
                <MainContent
                    dataAccess={this.state.dataAccess}
                    quickSearchSearchText={this.state.quickSearchSearchText}
                    onTaskCheckedOrUnchecked={() => this.setState({
                        remainingTasksCount: this.state.dataAccess.getRemainingTasksCount()
                    })}
                    onTaskDeleted={() => this.setState({
                        remainingTasksCount: this.state.dataAccess.getRemainingTasksCount(),
                        tasksCount: this.state.dataAccess.getTasksCount()
                    })} />
                <Footer
                    dataAccess={this.state.dataAccess}
                    onAddTaskClicked={() => this.setState({
                        showNewTaskDialog: true
                    })}
                    onQuickSearchInputChange={quickSearchSearchTextNewValue => this.setState({
                        quickSearchSearchText: quickSearchSearchTextNewValue
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
                                showNewTaskDialog: false,
                                remainingTasksCount: this.state.dataAccess.getRemainingTasksCount(),
                                tasksCount: this.state.dataAccess.getTasksCount()
                            });
                        }}
                        onNewTaskCancelled={() => this.setState({
                            showNewTaskDialog: false
                        })} />
                    : null}
            </div>
        );
    }
}

export default App;
