import React from 'react'
import './User.css'

const userOutput = (props) => {
    return (
        <div className='User'>
            <p>{props.msg}</p>
            <p>{props.name}</p>
        </div>
    )
};

export default userOutput;