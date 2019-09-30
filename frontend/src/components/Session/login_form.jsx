import React from "react";
import {withRouter} from "react-router-dom"
// import "../../css/form.scss";
import "../../css/session_forms.scss";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.clearErrors()
    }

    handleInput(inputType) {
        return (event) => {
            this.setState({[inputType]: event.target.value})
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.loginUser(user)
            // .then( () => {
            //     this.props.history.push(`/users/${user._id}`)
            // })
    }

    render() {

        const emailErrors = this.props.loginErrors.email;
        const passwordErrors = this.props.loginErrors.password;
        const notVerified = this.props.loginErrors.notVerified;

        return (
            <div className="session-form-container">
                <div className="session-card">
                    <form className="session-form">
                        <h1 className="session-form-header">Login</h1>
                        <div className="session-form-input">
                            <h3>Email</h3>
                            <input
                                type="text"
                                value={this.state.email}
                                // placeholder="example@example.com"
                                onChange={this.handleInput("email")}
                            />
                        </div>
                        <div className="errors-container">{notVerified ? notVerified : emailErrors}</div>
                        <div className="session-form-input">
                            <h3>Password</h3>
                            <input
                                type="password"
                                value={this.state.password}
                                // placeholder="Password"
                                onChange={this.handleInput("password")}
                            />
                        </div>
                        <div className="errors-container">{passwordErrors}</div>

                        <button id="session-btn" className="btn btn--card" onClick={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        )


    }
}

export default withRouter(LoginForm);