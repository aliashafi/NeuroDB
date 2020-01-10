import {connect} from "react-redux";
import {loginUser, clearErrors} from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
    return {
        loginErrors: state.errors.session,
        currentUserId: state.session.currentUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginUser(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
