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

        const registerErrors = Object.values(this.props.registerErrors).map( (err, i) => (
            <ul key={i}>
                {err}
            </ul>
        ))

        return (
            <div>
                <form className="session-form">
                    <input
                        type="text"
                        value={this.state.firstName}
                        placeholder="First name"
                        onChange={this.handleInput("firstName")}
                    />
                    <input
                        type="text"
                        value={this.state.lastName}
                        placeholder="Last name"
                        onChange={this.handleInput("lastName")}
                    />
                    <input
                        type="text"
                        value={this.state.affiliation}
                        placeholder="Affiliation"
                        onChange={this.handleInput("affiliation")}
                    />
                    <input
                        type="text"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleInput("email")}
                    />
                    <input
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInput("password")}
                    />
                    <input
                        type="password"
                        value={this.state.password2}
                        placeholder="Confirm password"
                        onChange={this.handleInput("password2")}
                    />
                    <div>
                        {registerErrors}
                    </div>

                    <button onClick={this.handleSubmit}>Register</button>
                </form>
            </div>
        )
    }
}

export default RegisterForm;