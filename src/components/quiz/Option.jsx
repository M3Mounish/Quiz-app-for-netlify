import React, { useState } from 'react';

function Option(props) {

    const [score, setScore] = useState(0);

    function handleClick() {
        if (props.answer === true) {
            setScore(score + 1);
            props.fun(true, "yes");
        } else if (props.answer === false) {
            props.fun(false, "no");

        }

    }


    return (
        <div className='main-div'>
            <div className='btn-div'>
                <button className='btn' onClick={handleClick} answer={props.answer}>{props.optionName}</button>
            </div>
        </div >
    )
}

export default Option;
