import React from "react";
import {withRouter} from "react-router-dom"
import "../../css/form.scss";

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
            // .then( () => this.props.history.push("/"))
    }

    render() {

        // const {loginErrors} = this.props;
        const loginErrors = Object.values(this.props.loginErrors).map( (err, i) => (
            <ul key={i}>
                {err}
            </ul>
        ))

        return (
            <div>
                <form className="card__form">
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
                    <div>
                        {loginErrors}
                    </div>

                    <button onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )


    }
}

export default withRouter(LoginForm);