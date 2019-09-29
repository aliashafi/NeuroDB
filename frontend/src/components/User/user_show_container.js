import {connect} from "react-redux";
import {fetchUsers, verifyToken, updateCurrentUserPendings} from "../../actions/user_actions";
import UserShow from "./user_show";


const mapStateToProps = (state) => {
    // users: state.entities.users,
    // currentUser: state.entities.users[state.session.currentUser.id]
    let currentUserId = state.session.currentUserId
    return {   
        currentUser: state.entities.users[currentUserId]
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    verifyToken: (token, adminId) => dispatch(verifyToken(token, adminId)),
    updateCurrentUserPendings: (pendUser) => dispatch(updateCurrentUserPendings(pendUser))
    // fetchUsers
    // is admin
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)