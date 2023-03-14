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
                        this.state.tasksList.map((listItemData, index) =>
                            <ListItem
                                key={index}
                                listItem={listItemData}
                                onCheckedChangedEvent={
                                    newCheckedListItemValue => {
                                        listItemData.isChecked = newCheckedListItemValue;
                                        this.props.dataAccess.setTasksList(this.state.tasksList);
                                    }
                                }
                                onTitleChangedEvent={
                                    newTitleListItemValue => {
                                        listItemData.title = newTitleListItemValue;
                                        this.props.dataAccess.setTasksList(this.state.tasksList);
                                    }
                                } />)
                    }
                </ul>
            </main>
        );
    }
}

MainContent.propTypes = {
    dataAccess: PropTypes.instanceOf(ListDataAccess)
};

export default MainContent;
