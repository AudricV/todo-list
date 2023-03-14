import React from "react";
import DataAccess from "../data_access/ListDataAccess";
import PropTypes from "prop-types";

class MainContent extends React.Component {
    render() {
        return (
            <main></main>
        );
    }
}

MainContent.propTypes = {
    dataAccess: PropTypes.instanceOf(DataAccess)
};

export default MainContent;
