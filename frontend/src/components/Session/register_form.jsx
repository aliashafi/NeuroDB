import React from "react";
import "../../css/form.scss";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            affiliation: "",
            email: "",
            password: "",
            password2: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.clearErrors()
    }

    handleInput(inputType) {
        return (event) => {
            this.setState({ [inputType]: event.target.value })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const newUser = Object.assign({}, this.state);
        this.props.registerUser(newUser);
    }

    render() {

        const firstNameErrors = this.props.registerErrors.firstName;
        const lastNameErrors = this.props.registerErrors.lastName;
        const affiliationErrors = this.props.registerErrors.affiliation;
        const emailErrors = this.props.registerErrors.email;
        const passwordErrors = this.props.registerErrors.password;


        return (
            <div className="session-form-container">
                <div className="session-card">
                    <form className="session-form">
                        <h1 className="session-form-header">Register</h1>
                        <input
                            className="session-form-input"
                            type="text"
                            value={this.state.firstName}
                            placeholder="First name"
                            onChange={this.handleInput("firstName")}
                        />
                        <div className="errors-container">{firstNameErrors}</div>
                        <input
                            className="session-form-input"
                            type="text"
                            value={this.state.lastName}
                            placeholder="Last name"
                            onChange={this.handleInput("lastName")}
                        />
                        <div className="errors-container">{lastNameErrors}</div>
                        <input
                            className="session-form-input"
                            type="text"
                            value={this.state.affiliation}
                            placeholder="Affiliation"
                            onChange={this.handleInput("affiliation")}
                        />
                        <div className="errors-container">{affiliationErrors}</div>
                        <input
                            className="session-form-input"
                            type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleInput("email")}
                        />
                        <div className="errors-container">{emailErrors}</div>
                        <input
                            className="session-form-input"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleInput("password")}
                        />
                        <div className="errors-container">{passwordErrors}</div>
                        <input
                            className="session-form-input"
                            type="password"
                            value={this.state.password2}
                            placeholder="Confirm password"
                            onChange={this.handleInput("password2")}
                        />
                        <button id="session-btn" className="btn btn--card" onClick={this.handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterForm;