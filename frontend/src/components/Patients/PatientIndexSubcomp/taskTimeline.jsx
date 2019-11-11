import React from 'react';
import {formatDate} from '../../../util/date_api_uil'

class TaskTimeLine extends React.Component {

    getDate(){

    }

    render(){
        return(
            <div className="line">
                <div className="hover">
                    <div className="implant-date"><i class="fas fa-circle bullet"></i></div>
                    <div className="implant-date-hover">DOS: {formatDate(this.props.patient.dateOfSurgery)}</div>
                </div>
                <div className="task1"></div>
                <div className="task2"></div>
                <div className="task3"></div>
                <div className="explant-date"><i class="fas fa-circle bullet"></i></div>
                {/* <div className="line"></div> */}
            </div>
        )
    }
}

export default TaskTimeLine;