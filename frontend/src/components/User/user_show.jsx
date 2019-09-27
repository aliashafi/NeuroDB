import React from "react";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     window.scrollTo(0, 0);
    //     this.props.fetchUser(this.props.currentUser.id)
    // }

    render() {

        const {currentUser} = this.props;
        return (
            <div>
                <h1>Welcome, {currentUser.firstName} {currentUser.lastName[0]}.</h1>
                <h2>{currentUser.email}</h2>
                <ul>{currentUser.affiliation}</ul>
                {/* <ul>{currentUser.pendingUsers}</ul> */}
                <ul>is Admin: {currentUser.isAdmin.toString()}</ul>
                <ul>is Verified: {currentUser.isVerified.toString()}</ul>

            </div>
        )

    }

}

export default UserShow;