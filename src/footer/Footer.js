import "./Footer.css";
import React from "react";
import PropTypes from "prop-types";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <input
                    type="text"
                    placeholder="Recherche rapide"
                    title="Saisissez un texte pour rechercher des éléments"
                    onChange={event => this.props.onQuickSearchInputChange(event.target.value)} />
                <button title="Ajouter un élément à faire" onClick={() => this.props.onAddTaskClicked()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path d="M21.75 38.75V26.3H9.25v-4.55h12.5V9.25h4.55v12.5h12.5v4.55H26.3v12.45Z"/>
                    </svg>
                </button>
            </footer>
        );
    }
}

Footer.propTypes = {
    onAddTaskClicked: PropTypes.func,
    onQuickSearchInputChange: PropTypes.func
};

export default Footer;
