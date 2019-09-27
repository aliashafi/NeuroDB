import {connect} from "react-redux";
import {fetchUser} from "../../actions/user_actions";
import UserShow from "./user_show";


const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)