import "./ListItem.css";
import React from "react";
import PropTypes from "prop-types";

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.listItem.isChecked,
            title: this.props.listItem.title
        };
    }

    render() {
        return (
            <li className="list_item">
                <input className="list_item_is_checked" type="checkbox" checked={this.state.isChecked} onChange={(event) => {
                    const newCheckedValue = event.target.checked;
                    this.props.onCheckedChangedEvent(newCheckedValue);
                    this.setState({
                        isChecked: newCheckedValue,
                        title: this.state.title
                    });
                }} />
                <input className="list_item_title" type="text" defaultValue={this.state.title} onChange={(event) => {
                    const newTitleValue = event.target.value;
                    this.props.onTitleChangedEvent(newTitleValue);
                    this.setState({
                        isChecked: this.state.isChecked,
                        title: newTitleValue
                    });
                }} />
            </li>
        );
    }
}

ListItem.propTypes = {
    listItem: PropTypes.object,
    onCheckedChangedEvent: PropTypes.func,
    onTitleChangedEvent: PropTypes.func
};

export default ListItem;
