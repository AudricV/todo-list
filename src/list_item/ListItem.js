import "./ListItem.css";
import React from "react";
import PropTypes from "prop-types";

class ListItem extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.listItemData != nextProps.listItemData;
    }

    render() {
        return (
            <li className="list_item">
                <input
                    className="list_item_is_checked"
                    type="checkbox"
                    checked={this.props.listItemData.isChecked}
                    onChange={event => {
                        const newCheckedValue = event.target.checked;
                        const newListItemData = {
                            title: this.props.listItemData.title,
                            isChecked: newCheckedValue
                        };
                        this.props.onCheckedChangedEvent(newListItemData);
                    }} />
                <input
                    className="list_item_title"
                    type="text"
                    defaultValue={this.props.listItemData.title}
                    onBlur={event => {
                        this.props.onTitleChangedEvent({
                            title: event.target.value,
                            isChecked: this.props.listItemData.isChecked
                        });
                    }}
                    onKeyDown={event => {
                        if (event.key === "Enter") {
                            this.props.onTitleChangedEvent({
                                title: event.target.value,
                                isChecked: this.props.listItemData.isChecked
                            });
                        }
                    }} />
                <section className="reorder_buttons">
                    <button
                        className="move_up_button"
                        onClick={() => this.props.onMoveUpButtonClicked()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="task_button" viewBox="0 0 48 48">
                            <path d="M21.75 40.4V16.3l-10.9 10.95-3.25-3.3L24 7.6l16.45 16.35-3.2 3.3L26.3 16.3v24.1Z" />
                        </svg>
                    </button>
                    <button
                        className="move_down_button"
                        onClick={() => this.props.onMoveDownButtonClicked()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="task_button" viewBox="0 0 48 48">
                            <path d="M24 40.4 7.6 23.95l3.25-3.2 10.9 10.9V7.6h4.55v24.05l10.95-10.9 3.2 3.2Z" />
                        </svg>
                    </button>
                    <button
                        className="delete_button"
                        onClick={() => this.props.onDeleteButtonClicked(this.props.listItemData)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="task_button" viewBox="0 0 48 48">
                            <path d="M12.65 43.05q-1.8 0-3.2-1.35-1.4-1.35-1.4-3.2V10.9h-2.9V6.35h11.4V4H31.4v2.35h11.4v4.55h-2.9v27.6q0 1.85-1.35 3.2t-3.25 1.35Zm5.2-8.45h3.7V14.7h-3.7Zm8.65 0h3.75V14.7H26.5Z" />
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
    onMoveDownButtonClicked: PropTypes.func,
    onDeleteButtonClicked: PropTypes.func
};

export default ListItem;
