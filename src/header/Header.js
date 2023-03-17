import "./Header.css";
import React from "react";
import ListDataAccess from "../data_access/ListDataAccess";
import PropTypes from "prop-types";

class Header extends React.Component {
    render() {
        return (
            <header className="tasks_summary">
                <p className="remaining_tasks_summary">Tâches restantes&nbsp;:&nbsp;</p>
                <p className="remaining_tasks_count">{this.props.dataAccess.getRemainingTasksCount()}</p>
                <p className="remaining_tasks_separator">&nbsp;/&nbsp;</p>
                <p className="tasks_count">{this.props.dataAccess.getTasksCount()} tâches</p>
            </header>
        );
    }
}

Header.propTypes = {
    dataAccess: PropTypes.instanceOf(ListDataAccess)
};

export default Header;
