import React, { useState } from 'react';
import Option from "./Option";
import Question from "./Title-question";
// import Result from "./result";

function Qnumber(props) {

    //---middle-man for passing values form callback.---
    function noName(params) {
        props.fun(params);
    }
    return (
        <div>

            <div className="quiz-box">
                <Question question={props.question} />
                <Option optionName={props.optionName[0]} answer={props.answer[0]} fun={noName} />
                <Option optionName={props.optionName[1]} answer={props.answer[1]} fun={noName} />
                <Option optionName={props.optionName[2]} answer={props.answer[2]} fun={noName} />
                <Option optionName={props.optionName[3]} answer={props.answer[3]} fun={noName} />

            </div>
        </div>
    );
}

export default Qnumber;