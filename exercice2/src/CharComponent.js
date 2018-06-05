import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return(
        <p className='InlineBox' onClick={props.click}>
            {props.letter}                  
        </p>
    )
}

export default charComponent;