import React from 'react';

const MIN_LENGTH = 5;

const validationComponent = (props) => {
    if (props.len < MIN_LENGTH) {
        return <p>Text too short</p>
    } else {
        return <p>Text long enough</p>
    }
}

export default validationComponent;