import React, { useState } from 'react';
import Countdown, { formatTimeDelta } from 'react-countdown';
import Option from "./Option";
import Question from "./Title-question";


function Qnumber(props) {
    // formatTimeDelta(timeDelta, [{
    //     minutes: '00',
    //     seconds: '00',
    // }])
    //---middle-man for passing values form callback.---
    function noName(params) {
        props.fun(params);
    }
    return (
        <div>
            <div className="quiz-box">
                <Question question={props.question} />
                <Countdown date={Date.now() + 10000} onComplete={() => { alert("Time's Up") }} />
                <Option optionName={props.optionName[0]} answer={props.answer[0]} fun={noName} />
                <Option optionName={props.optionName[1]} answer={props.answer[1]} fun={noName} />
                <Option optionName={props.optionName[2]} answer={props.answer[2]} fun={noName} />
                <Option optionName={props.optionName[3]} answer={props.answer[3]} fun={noName} />

            </div>
        </div>
    );
}

export default Qnumber;