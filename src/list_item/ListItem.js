import "./ListItem.css";
import React from "react";
import PropTypes from "prop-types";

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItemData: this.props.listItemData
        };
    }

    render() {
        return (
            <li className="list_item">
                <input className="list_item_is_checked" type="checkbox" checked={this.state.listItemData.isChecked} onChange={(event) => {
                    const newCheckedValue = event.target.checked;
                    const newListItemData = {
                        title: this.state.listItemData.title,
                        isChecked: newCheckedValue
                    };
                    this.props.onCheckedChangedEvent(newListItemData);
                }} />
                <input className="list_item_title" type="text" defaultValue={this.state.listItemData.title} onChange={(event) => {
                    const newTitleValue = event.target.value;
                    const newListItemData = {
                        title: newTitleValue,
                        isChecked: this.state.listItemData.isChecked
                    };
                    this.props.onTitleChangedEvent(newListItemData);
                }} />
                <section className="reorder_buttons">
                    <button className="move_up_button" onClick={() => this.props.onMoveUpButtonClicked()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="move_task_button" viewBox="0 0 48 48">
                            <path d="M21.75 40.4V16.3l-10.9 10.95-3.25-3.3L24 7.6l16.45 16.35-3.2 3.3L26.3 16.3v24.1Z"/>
                        </svg>
                    </button>
                    <button className="move_down_button" onClick={() => this.props.onMoveDownButtonClicked()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="move_task_button" viewBox="0 0 48 48">
                            <path d="M24 40.4 7.6 23.95l3.25-3.2 10.9 10.9V7.6h4.55v24.05l10.95-10.9 3.2 3.2Z" />
                        </svg>
                    </button>
                </section>
            </li>
        );
    }
}

ListItem.propTypes = {
    listItemData: PropTypes.object,
    onCheckedChangedEvent: PropTypes.func,
    onTitleChangedEvent: PropTypes.func,
    onMoveUpButtonClicked: PropTypes.func,
    onMoveDownButtonClicked: PropTypes.func
};

export default ListItem;
