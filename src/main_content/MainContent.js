import "./MainContent.css";
import React from "react";
import ListDataAccess from "../data_access/ListDataAccess";
import ListItem from "../list_item/ListItem";
import PropTypes from "prop-types";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksList: this.props.dataAccess.getTasksList()
        };
    }

    render() {
        return (
            <main>
                <ul className="list_items">
                    {
                        this.state.tasksList
                            .filter(listItemData => {
                                // Don't filter task items if quickSearchSearchText is null or empty, in order to avoid
                                // unneeded characters researches
                                if (this.props.quickSearchSearchText != null
                                    && this.props.quickSearchSearchText != "") {
                                    return listItemData.title.includes(this.props.quickSearchSearchText);
                                }
                                return true;
                            })
                            .map((listItemData, index) =>
                                <ListItem
                                    key={index + "-" + listItemData.title + "-" + listItemData.isChecked}
                                    listItemData={listItemData}
                                    onCheckedChangedEvent={
                                        newListItemData => {
                                            this.state.tasksList.splice(index, 1);
                                            this.state.tasksList.splice(index, 0, newListItemData);
                                            this.props.dataAccess.setTasksList(this.state.tasksList);
                                            this.props.onTaskCheckedOrUnchecked();
                                            this.setState({
                                                tasksList: this.state.tasksList
                                            });
                                        }
                                    }
                                    onTitleChangedEvent={
                                        newListItemData => {
                                            this.state.tasksList.splice(index, 1);
                                            this.state.tasksList.splice(index, 0, newListItemData);
                                            this.props.dataAccess.setTasksList(this.state.tasksList);
                                            this.setState({
                                                tasksList: this.state.tasksList
                                            });
                                        }
                                    }
                                    onMoveUpButtonClicked={
                                        () => {
                                            // Do not change the position if the item is at the start of the list
                                            if (index === 0) {
                                                return;
                                            }

                                            const taskElementToMove = this.state.tasksList.splice(index, 1)[0];
                                            this.state.tasksList.splice(index - 1, 0, taskElementToMove);
                                            this.props.dataAccess.setTasksList(this.state.tasksList);
                                            this.setState({
                                                tasksList: this.state.tasksList
                                            });
                                        }
                                    }
                                    onMoveDownButtonClicked={
                                        () => {
                                            // Do not change the position if the item is at the end of the list
                                            if (index === this.state.tasksList.length) {
                                                return;
                                            }

                                            const taskElementToMove = this.state.tasksList.splice(index, 1)[0];
                                            this.state.tasksList.splice(index + 1, 0, taskElementToMove);

                                            this.props.dataAccess.setTasksList(this.state.tasksList);
                                            this.setState({
                                                tasksList: this.state.tasksList
                                            });
                                        }
                                    } />)
                    }
                </ul>
            </main>
        );
    }
}

MainContent.propTypes = {
    dataAccess: PropTypes.instanceOf(ListDataAccess),
    quickSearchSearchText: PropTypes.string,
    onTaskCheckedOrUnchecked: PropTypes.func
};

export default MainContent;
