import {connect} from "react-redux";
import {fetchUsers, verifyToken, updateCurrentUserPendings} from "../../actions/user_actions";
import UserShow from "./user_show";


const mapStateToProps = (state) => {
    // users: state.entities.users,
    // currentUser: state.entities.users[state.session.currentUser.id]
    let currentUserId = state.session.currentUserId
    return {   
        users: state.entities.users,
        currentUser: state.entities.users[currentUserId]
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    verifyToken: (token, adminId) => dispatch(verifyToken(token, adminId)),
    // updateCurrentUserPendings: (pendUserEmail, adminId) => dispatch(updateCurrentUserPendings(pendUserEmail, adminId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)