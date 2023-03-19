import "./Header.css";
import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
    render() {
        return (
            <header className="tasks_summary">
                <p className="remaining_tasks_summary">Tâches restantes&nbsp;:&nbsp;</p>
                <p className="remaining_tasks_count">{this.props.remainingTasksCount}</p>
                <p className="remaining_tasks_separator">&nbsp;/&nbsp;</p>
                <p className="tasks_count">{this.props.tasksCount} tâches</p>
            </header>
        );
    }
}

Header.propTypes = {
    remainingTasksCount: PropTypes.number,
    tasksCount: PropTypes.number
};

export default Header;
