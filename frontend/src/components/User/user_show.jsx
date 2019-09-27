import React from "react";
import "../../css/patient_show.scss";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     window.scrollTo(0, 0);
    //     this.props.fetchUser(this.props.currentUser.id)
    // }

    render() {
        
        // debugger
        const {currentUser} = this.props;
        const myPendingUsers = Object.keys(currentUser.pendingUsers).map( user => {
            const token = this.props.currentUser.pendingUsers[user]
            // debugger
            return (   
                <div>
                    {user} <button>Verify</button>
                </div>
            )
        })



        return (
            <div className="patient-dem-container">
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
                    <div className="inner-card__field-grouping flex-size">
                        <div className="inner-card__field-label">Pending users</div> 
                        <div className="inner-card__field-value">{myPendingUsers}</div>
                    </div>
                    <ul>is Admin: {currentUser.isAdmin.toString()}</ul>
                    <ul>is Verified: {currentUser.isVerified.toString()}</ul>
                </div>

            </div>
        )

    }

}

export default UserShow;