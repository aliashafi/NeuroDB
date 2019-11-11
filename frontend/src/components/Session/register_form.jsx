import React from "react";


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
                        <div className="session-form-input">
                            <h3>First name</h3>
                            <input
                                type="text"
                                value={this.state.firstName}
                                onChange={this.handleInput("firstName")}
                            />
                        </div>
                        <div className="errors-container">{firstNameErrors}</div>
                        <div className="session-form-input">
                            <h3>Last name</h3>
                            <input
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleInput("lastName")}
                            />
                        </div>
                        <div className="errors-container">{lastNameErrors}</div>
                        <div className="session-form-input">
                            <h3>Affiliation</h3>
                            <input
                                type="text"
                                value={this.state.affiliation}
                                onChange={this.handleInput("affiliation")}
                            />
                        </div>
                        <div className="errors-container">{affiliationErrors}</div>
                        <div className="session-form-input">
                            <h3>Email address</h3>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput("email")}
                            />
                        </div>
                        <div className="errors-container">{emailErrors}</div>
                        <div className="session-form-input">
                            <h3>Password</h3>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput("password")}
                            />
                        </div>
                        <div className="errors-container">{passwordErrors}</div>
                        <div className="session-form-input">
                            <h3>Confirm password</h3>
                            <input
                                type="password"
                                value={this.state.password2}
                                onChange={this.handleInput("password2")}
                            />
                        </div>
                        <button id="session-btn" className="btn btn--card" onClick={this.handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterForm;