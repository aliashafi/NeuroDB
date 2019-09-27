import {connect} from "react-redux";
import {registerUser, clearErrors} from "../../actions/session_actions";
import RegisterForm from "./register_form";

const mapStateToProps = (state) => {
    return {
        registerErrors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user) => dispatch(registerUser(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);