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
                        dataAccess: this.state.dataAccess,
                        showNewTaskDialog: this.state.showNewTaskDialog,
                        quickSearchSearchText: this.state.quickSearchSearchText,
                        remainingTasksCount: this.state.dataAccess.getRemainingTasksCount(),
                        tasksCount: this.state.tasksCount
                    })}
                    onTaskDeleted={() => this.setState({
                        dataAccess: this.state.dataAccess,
                        showNewTaskDialog: this.state.showNewTaskDialog,
                        quickSearchSearchText: this.state.quickSearchSearchText,
                        remainingTasksCount: this.state.dataAccess.getRemainingTasksCount(),
                        tasksCount: this.state.dataAccess.getTasksCount()
                    })} />
                <Footer
                    dataAccess={this.state.dataAccess}
                    onAddTaskClicked={() => this.setState({
                        dataAccess: this.state.dataAccess,
                        showNewTaskDialog: true,
                        quickSearchSearchText: this.state.quickSearchSearchText,
                        remainingTasksCount: this.state.remainingTasksCount,
                        tasksCount: this.state.tasksCount
                    })}
                    onQuickSearchInputChange={quickSearchSearchTextNewValue => this.setState({
                        dataAccess: this.state.dataAccess,
                        showNewTaskDialog: this.state.showNewTaskDialog,
                        quickSearchSearchText: quickSearchSearchTextNewValue,
                        remainingTasksCount: this.state.remainingTasksCount,
                        tasksCount: this.state.tasksCount
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
                                showNewTaskDialog: false,
                                quickSearchSearchText: this.state.quickSearchSearchText,
                                remainingTasksCount: this.state.dataAccess.getRemainingTasksCount(),
                                tasksCount: this.state.dataAccess.getTasksCount()
                            });
                        }}
                        onNewTaskCancelled={() => this.setState({
                            dataAccess: this.state.dataAccess,
                            showNewTaskDialog: false,
                            quickSearchSearchText: this.state.quickSearchSearchText,
                            remainingTasksCount: this.state.remainingTasksCount,
                            tasksCount: this.state.tasksCount
                        })} />
                    : null}
            </div>
        );
    }
}

export default App;
