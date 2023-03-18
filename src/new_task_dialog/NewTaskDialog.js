import "./NewTaskDialog.css";
import React from "react";
import PropTypes from "prop-types";

class NewTaskDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isErrorMessageShown: true
        };
    }
    render() {
        return (
            <dialog className="new_task_dialog">
                <h1 className="new_task_title">Ajouter une tâche</h1>
                <input id="new_task_input" type="text" placeholder="Saisissez le nom de la tâche" onChange={(event) => {
                    this.setState({
                        isErrorMessageShown: event.target.value.trim() === ""
                    });
                }}></input>
                {this.state.isErrorMessageShown ? <p className="new_task_invalid_input">Veuillez saisir un nom de tâche valide.</p> : null}
                <menu className="new_task_buttons">
                    <button className="new_task_cancel_button" onClick={() => this.props.onNewTaskCancelled()}>Annuler</button>
                    <button className="new_task_add_task_button" onClick={() => {
                        if (!this.state.isErrorMessageShown) {
                            this.props.onNewTaskSubmitted(document.getElementById("new_task_input").value);
                        }
                    }}>Ajouter une tâche</button>
                </menu>
            </dialog>
        );
    }
}

NewTaskDialog.propTypes = {
    onNewTaskSubmitted: PropTypes.func,
    onNewTaskCancelled: PropTypes.func
};

export default NewTaskDialog;
