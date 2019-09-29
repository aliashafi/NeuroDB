import React from "react";
import "../../css/user_show.scss";
import {Redirect} from "react-router-dom";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchUsers()
    }

    // componentDidUpdate(prevState) {
    //     debugger
    // }

    handleVerify(token, user) {
        // debugger
        return (event) => {
            event.preventDefault()
            const adminId = this.props.currentUser._id
            // debugger
            this.props.verifyToken(token, adminId)
            this.props.updateCurrentUserPendings(user)
        }
    }

    render() {
        
        // debugger
        const {currentUser} = this.props;
        // debugger
        
        if (!currentUser) {
            return null;
        } else {
        
            const myPendingUsers = Object.keys(currentUser.pendingUsers).map( (user, i) => {
                const token = this.props.currentUser.pendingUsers[user]
                return (   
                    <div key={i}>
                        {user} <button onClick={this.handleVerify(token, user)}>Verify</button>
                    </div>
                )
            })

            const pendingUserDisplay = currentUser.isAdmin ? (
                <div className="inner-card__field-grouping flex-size">
                    <div className="inner-card__field-label">Pending users</div>
                    <div className="inner-card__field-value">{myPendingUsers}</div>
                </div>
            ) : (
                <div></div>
            )

            return (
                <div className="user-show-container">
                    <h1 className="patient-show-inner-card__header initial-header">
                        Welcome, {currentUser.firstName} {currentUser.lastName[0]}.
                    </h1>
                    <div className="header-divider"></div>
                    <div className="inner-card__section-grouping">
                        <div className="inner-card__field-grouping flex-size">
                            <div className="inner-card__field-label">Email address</div>
                            <div className="inner-card__field-value">{currentUser.email}</div>
                        </div>
                        <div className="inner-card__field-grouping flex-size">
                            <div className="inner-card__field-label">Affiliation</div>
                            <div className="inner-card__field-value">{currentUser.affiliation}</div>

                        </div>
                        {pendingUserDisplay}
                        {/* <ul>is Admin: {currentUser.isAdmin.toString()}</ul>
                        <ul>is Verified: {currentUser.isVerified.toString()}</ul> */}
                    </div>

                </div>
            )
        }

    }

}

export default UserShow;