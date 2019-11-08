import React from "react";
import BrainIcon from "../../images/brain-icon.png";
import "../../css/user_show.scss";
// import {Redirect} from "react-router-dom";

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
            this.props.verifyToken(token, adminId)
            
        }
    }

    render() {
        
        let unVerified = Object.values(this.props.users).filter(user => !user.isVerified)
        
        const {currentUser} = this.props;
        
        
        if (!currentUser) {
            return null;
        } else {

            const months = [
                "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
            const joinDate = new Date(currentUser.createdAt);
            const month = months[joinDate.getMonth()];
            const year = joinDate.getFullYear().toString();
        
            const myPendingUsers = unVerified.map( (user, i) => {
                // const token = this.props.currentUser.pendingUsers[user]
                return (   
                    <div className="pend-item" key={i}>
                        <span><div id="verify-user">{user.firstName} {user.lastName}</div></span>
                        <span><div id="verify-user">{user.affiliation}</div></span>
                        <span><button id="verify-btn">Verify</button></span>
                        <span><div id="verify-user">{user}</div></span>
                        <span><button id="verify-btn" onClick={this.handleVerify(token, user)}>Verify</button></span>
                    </div>
                )
            })

            const pendingUserDisplay = currentUser.isAdmin ? (
                <div className="user-pend">
                    <h3>All Users</h3>
                    <div className="user-pending-headers">
                        <h2>Name</h2>
                        <h2>Affiliation</h2>
                        <h2>Status</h2>
                    </div>
                    <div className="pend-list">{myPendingUsers}</div>
                </div>
            ) : (
               ""
                    <h3>Pending approvals</h3>
                    <div className="pend-list">{myPendingUsers}</div>
                </div>
            ) : (
                <div className="non-admin-container">
                    <h1>Approval Status</h1>
                        <h2>Approved</h2>
                </div>
            )

            return (
                <div className="user-show-container">
                    <div className="user-show-card">
                        {/* <div className="user-welcome-container">
                            <h1 >
                                NeuroDB
                            </h1>
                        </div>
                        <div className="user-show-divider"></div> */}
                        <div className="user-welcome-name">
                            <h2>Welcome to NeuroDB, </h2>
                            <h3>{currentUser.firstName} {currentUser.lastName[0]}.</h3>
                        </div>
                        <div className="user-info-container">
                            <div className="user-attributes-container">
                                <div className="user-icon">
                                    <img src={BrainIcon} alt=""/>
                                </div>
                                <div className="user-att">
                                    <h3>Affiliation:</h3>
                                    <p>{currentUser.affiliation}</p>
                                </div>
                                <div className="user-att">
                                    <h3>Email address:</h3>
                                    <p>{currentUser.email}</p>
                                </div>
                                <div className="user-att">
                                    <h3>Privileges:</h3>
                                    <p>{currentUser.isAdmin ? "Admin" : "Researcher"}</p>
                                </div>
                                <div className="user-att">
                                    <h3>Member since:</h3>
                                    <p>{month} {year}</p>
                                </div>
                            </div>
                            <div className="user-pending-container">
                                <div className="task-card">
                                    <h2>Tasks</h2>
                                </div>
                                {/* {pendingUserDisplay} */}
                            </div>
                        </div>
                    </div>

                </div>
            )
        }

    }

}

export default UserShow;