import React from 'react'
import { useParams } from 'react-router-dom'

const StudentApplicationView = (props) => {
    const {id} = useParams();
    return (
        <div>
            {/* this is the complete view of the student application */}
            <div className="stud_app">
                This is the application of {props.name} with id {id}
            </div>
        </div>
    )
}

export default StudentApplicationView