import {connect} from "react-redux";
import {fetchUser, verifyToken} from "../../actions/user_actions";
import UserShow from "./user_show";
import { stat } from "fs";


const mapStateToProps = (state) => ({
    // users: state.entities.users,
    currentUser: state.session.currentUser
    // currentUser: state.entities.users[state.session.currentUser.id]
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    verifyToken: (token, adminId) => dispatch(verifyToken(token, adminId))
    // fetchUsers
    // is admin
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)