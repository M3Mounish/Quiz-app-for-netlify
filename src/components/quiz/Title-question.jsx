import React from 'react';

function Question(props) {
    return (
        <div className='main-div'>
            <h3 className='question'>{props.question}</h3>
        </div>
    );
}

export default Question;