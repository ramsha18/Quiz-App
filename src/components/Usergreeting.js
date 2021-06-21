import React from 'react'

function Usergreeting(props) {
    return (
        <div className="greet" >
            <h2>Thank you for completing The Questionnarie</h2>
            <h2>Your Status: {props.status}</h2>
        </div>
    )
}

export default Usergreeting
